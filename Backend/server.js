const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');
const artRoutes =require('./routes/articlesRoutes');
const userRoutes =require('./routes/userRoutes');
const authRoutes = require('./routes/auth');
const panierRoutes = require('./routes/panierRoutes');
const favorisRoutes = require('./routes/favorisRoutes');
const path = require('path');


const app= express();
app.use(cors())
app.use(express.json())


// Routes
app.use("/categories", catRoutes);
app.use("/articles", artRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/panier", panierRoutes);
app.use("/favoris", favorisRoutes);



// Pour que Express s'occupe du front end (de chat GPT)

// Servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Rediriger toutes les requêtes vers index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});


const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0',  () => {
    console.log("Server is running !")
});
