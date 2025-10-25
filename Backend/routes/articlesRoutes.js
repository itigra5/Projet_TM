const express = require("express");
const router = express.Router();
const { models } = require('../models'); 

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
        
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;