const express = require("express");
const router = express.Router();
const {models} = require("../models");

// Ajouter un produit au panier
router.post("/add", async (req, res) => {
  const { userId, produitId, qty } = req.body;

  try {
     // Si le produit existe déjà dans le panier, tu peux mettre à jour la quantité
     const existing = await models.Panier.findOne({
       where: { idUser_panier: userId, idProduit_panier: produitId }
     });

     if (existing) {
      existing.Quantity += qty;
       await existing.save();
       return res.json({ message: "Quantité mise à jour dans le panier" });
     }
    // Sinon, créer une nouvelle entrée
    await models.Panier.create({
      idUser_panier: userId,
      idProduit_panier: produitId,
      Quantity: qty,
      Timer: null
    });

  } catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
try{
  console.log("L'id est ; ", req.params.id)
  const panier = await models.Panier.findAll({
        where : { idUser_panier : req.params.id },
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
    res.json(panier);
}catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
