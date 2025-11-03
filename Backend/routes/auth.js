const express = require("express");
const router = express.Router();
const { models } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Inscription
router.post("/signin", async (req, res) => {
  try {
    const { prenom, nom, email, password, ville } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const newUser = await models.User.create({
      Nom: nom,
      Prénom: prenom,
      Adress: ville,
      Mot_de_passe: hashed,
      Email: email,
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Erreur signup:", err);
    res.status(500).json({ error: err.message });
  }
});

// Connexion
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { Email: email } });
    if (!user) return res.status(400).json({ error: "Email invalide" });

    const valid = await bcrypt.compare(password, user.Mot_de_passe);
    if (!valid) return res.status(400).json({ error: "Mot de passe invalide" });

    const token = jwt.sign(
      { id: user.id, email: user.Email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Erreur login:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
