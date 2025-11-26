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

router.get("/check/:userId/:produitId", async (req, res) => {
    try{
         const fav = await models.Favoris.findOne({
        where : { idUser_favoris : req.params.userId, idProduit_favoris : req.params.produitId }  
  });
  res.json({ exist: fav ? 1 : 0 });

    }catch(err){
        console.error("Erreur exacte :", err); 
        res.status(500).json({ error: err.message });
    }
});

router.post("/add", async (req, res) => {
  const { userId, produitId } = req.body;

  try {
    await models.Favoris.findOrCreate({
      where: {
        idUser_favoris: userId,
        idProduit_favoris: produitId,
      }
    });

    return res.json({ success: true });


  } catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});


// // A METTRE DANS LE BODY PLUTOTKCCKCKCKCK
router.delete("/del/:userId/:produitId", async (req, res) => {
  try {
    const { userId, produitId } = req.params;

    const deleted = await models.Favoris.destroy({
      where: {
        idUser_favoris: userId,
        idProduit_favoris: produitId
      }
    });

    if (deleted === 0) {
      return res.status(404).json({ error: "Élément non trouvé" });
    }

    res.json({ message: "Élément supprimé des favoris" });
  } catch (err) {
    console.error("Erreur DELETE favoris :", err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
