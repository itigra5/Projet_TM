const express = require("express");
const router = express.Router();
const { models } = require('../models'); 
const { where } = require("sequelize");

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

// // // router.get('/images/:id', async (req, res) => {
// // //     try{
// // //         const image = await models.PhotoProduit.findOne({
// // //             where : {idProduit_Photo : req.params.id}
// // //         });
// // //         res.json(image)
// // //     }catch (err){
// // //         res.status(500).json(err);
// // //     }
// // // });


router.post('/post', async (req, res) => {
    try{
        
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;