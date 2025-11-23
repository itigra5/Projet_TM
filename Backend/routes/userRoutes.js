const express = require("express");
const router = express.Router();
const { models } = require('../models'); 
const { where } = require("sequelize");


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

router.get('/:id', async (req, res) => {
    try{
        const user = await models.User.findByPk(req.params.id);
        res.json(user)
    }catch (err){
        res.status(500).json(err);
    }
});

router.post('/followers/add/:id', async (req, res) => {
    try{
        await models.Follower.create({idAbonnement : req.params.id, idAbonné : req.body.userId})
        res.status(201).json({ message: "Abonnement ajouté !" });
    }catch(err){

        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Déjà abonné' });
        }

        res.status(500).json(err)
    }
});

router.delete('/followers/remove/:id', async (req, res) => {
    try {
        const idAbonnement = req.params.id;
        const idAbonné = req.body.userId;

        const deleted = await models.Follower.destroy({where: { idAbonnement, idAbonné }});

        if (deleted === 0) {
            return res.status(404).json({ message: "Relation non trouvée" });
        }

        res.json({ message: "Désabonné avec succès" });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/followers/check/:id/:userId', async (req, res) => {
    try{
        const idAbonné = req.params.userId;
        const idAbonnement = req.params.id;

        const follow = await models.Follower.findOne({
            where: {idAbonnement, idAbonné}
        })

        console.log("est abbo ? ", follow)

        if (follow) {
      return res.json({ isFollowing: true });
        }
        else {
      return res.json({ isFollowing: false });
        }
    }catch(err){
        res.status(500).json(err)
    }
});



module.exports = router;