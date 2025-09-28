const express = require("express");
const router = express.Router();
const { models } = require('../models'); 

router.get('/', async (req, res) => {
    try{
        const categories = await models.categories.findAll();
        res.json(categories)
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;