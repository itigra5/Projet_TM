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
            },
        {
          model: models.User,  
          as: 'vendeur',     
          attributes: ['idUser', 'Nom', 'Adresse', 'Photo_de_profil', 'Nombre_etoile']
        }
    ]
        });
        res.json(articles)
    }catch (err){
        res.status(500).json(err);
    }
});


router.post('/post', async (req, res) => {
    try{
        const idUser = 2;
        const { title, desc, price, categoryId, quantity } = req.body;

        console.log("Data reçue:", req.body);

        
        const newPost = await models.Produit.create({
            NomProduit: title,
            Description: desc,
            Prix: price,
            idUser_produit: idUser,
            Quantité: quantity,
            idCategorie_produit: categoryId,
            Quantité:  1 // à add dans le front
        });
        res.status(201).json(newPost);
    }catch (err){
        res.status(500).json(err);
    }
});


// pour les Images

router.post('/upload', upload.array('image'), async (req, res) => {
  try {
    const { idProduit_Photo } = req.body;
    const uploadedUrls = [];
    
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    console.log("traitement...")

    for (const file of req.files) {
    // les poster sur cloudinary
    const result = await cloudinary.uploader.upload(file.path);

    const newPhoto = await models.PhotoProduit.create({
      idProduit_Photo: idProduit_Photo,
      Images: result.secure_url
    });

    uploadedUrls.push(result.secure_url);
    }

    res.json({ urls : uploadedUrls  });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;