const express = require("express");
const router = express.Router();
const { models } = require('../models'); 
const categorie = require("../models/categorie");
const { where } = require("sequelize");

router.get('/', async (req, res) => {
    try{
        const categories = await models.categories.findAll();
        res.json(categories)
    }catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id/:NomCategorie', async (req, res) => {
  try {
    const sousCategories = await models.SousCategorie.findAll({
        where : { idCategorie_Sous : req.params.id }        
  });
    res.json(sousCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;