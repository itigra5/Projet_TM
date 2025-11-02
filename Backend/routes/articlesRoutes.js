const express = require("express");
const router = express.Router();
const { models } = require('../models'); 
const multer = require('multer');
const cloudinary = require('../lib/cloudinary');
const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
    try{
        const articles = await models.Produit.findAll({
            include: [{
                model: models.PhotoProduit,
                as: 'photos'
            }]
        });
        res.json(articles)
    }catch (err){
        res.status(500).json(err);
    }
});


router.post('/post', async (req, res) => {
    try{
        const idUser = 2;
        const { title, desc, price, categoryId } = req.body;

        console.log("Data reçue:", req.body);

        
        const newPost = await models.Produit.create({
            NomProduit: title,
            Description: desc,
            Prix: price,
            idUser_produit: idUser,
            idCategorie_produit: categoryId,
            Quantité:  1 // à add dans le front
        });
        res.status(201).json(newPost);
    }catch (err){
        res.status(500).json(err);
    }
});


// pour les Images
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;