const express = require("express");
const router = express.Router();
const {models} = require("../models");

// Ajouter un produit au panier
router.post("/add", async (req, res) => {
  const { userId, produitId, qty } = req.body;
  console.log("Body reçu :", req.body);

  try {
     console.log("avant find one");

     // Si le produit existe déjà dans le panier, tu peux mettre à jour la quantité
     const existing = await models.Panier.findOne({
       where: { idUser_panier: userId, idProduit_panier: produitId }
     });

 console.log("✅ try fait !");
     if (existing) {
      existing.Quantity += qty;
       await existing.save();
       return res.json({ message: "Quantité mise à jour dans le panier" });
     }
console.log("essay fait")
    // Sinon, créer une nouvelle entrée
    await models.Panier.create({
      idUser_panier: userId,
      idProduit_panier: produitId,
      Quantity: qty,
      Timer: null
    });

  res.status(201).json({ message: "Panier mis à jour" });

  } catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
try{
  const panier = await models.Panier.findAll({
        where : { idUser_panier : req.params.id }        
  });
    res.json(panier);
}catch (err) {
    console.error("Erreur exacte :", err); 
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
