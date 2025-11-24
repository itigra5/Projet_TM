const express = require("express");
const router = express.Router();
const {models} = require("../models");


router.get("/:id", async (req, res) => {
try{
  const fav = await models.Favoris.findAll({
        where : { idUser_favoris : req.params.id },
        include: [
    {
      model: models.Produit,
      as: "produit",
      include: [
        {
          model: models.User,
          as: "vendeur" // <- le vendeur du produit
        },
        {
          model: models.PhotoProduit,
          as: 'photos'
        }
      ]
    }
  ]       
  });
    res.json(fav);
}catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});



router.post("/add", async (req, res) => {
  const { userId, produitId } = req.body;

  try {
    // Sinon, créer une nouvelle entrée
    await models.Favoris.create({
      idUser_favoris: userId,
      idProduit_favoris: produitId,
    });

  } catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
