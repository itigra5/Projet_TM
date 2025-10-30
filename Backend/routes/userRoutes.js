const express = require("express");
const router = express.Router();
const { models } = require('../models'); 
const { where } = require("sequelize");


router.get('/:id', async (req, res) => {
    try{
        const user = await models.User.findByPk(req.params.id);
        res.json(user)
    }catch (err){
        res.status(500).json(err);
    }
});

router.get('/followers/:id', async (req, res) => {
    try{
        const {count, rows} = await models.Follower.findAndCountAll({
            where : { idAbonnement : req.params.id }
        });
        res.json(count)
    }catch (err){
        res.status(500).json(err);
    }
});

router.post('/followers/add/:id', async (req, res) => {
    try{


        await models.Follower.create({idAbonnement : req.params.id, idAbonné : 100})
        res.status(201).json({ message: "Abonnement ajouté !" });
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router;