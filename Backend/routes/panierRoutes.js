const express = require("express");
const router = express.Router();
const models = require("../models");

// Ajouter un produit au panier
router.post("/add", async (req, res) => {
  const { userId, produitId, qty } = req.body;

  try {
    // Si le produit existe déjà dans le panier, tu peux mettre à jour la quantité
    const existing = await models.Panier.findOne({
      where: { idUser_panier: userId, idProduit_panier: produitId }
    });

    if (existing) {
      existing.Quantite += qty;
      await existing.save();
      return res.json({ message: "Quantité mise à jour dans le panier" });
    }

    // Sinon, créer une nouvelle entrée
    await models.Panier.create({
      idUser_panier: userId,
      idProduit_panier: produitId,
      Quantite: qty,
      Timer: null
    });

    res.json({ message: "Produit ajouté au panier" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
