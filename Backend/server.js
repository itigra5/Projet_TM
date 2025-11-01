const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');
const artRoutes =require('./routes/articlesRoutes');
const userRoutes =require('./routes/userRoutes');
const sequelize = require('./lib/db');
const path = require('path');


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app= express();
app.use(cors())
app.use(express.json())


// Pour que Express s'occupe du front end

// Sert les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Route “catch-all” pour le frontend
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..','dist', 'index.html'));
});

app.get('/', (req, res) => {
    res.send("merci, ça marche !");
});

// Routes
app.use("/categories", catRoutes);
app.use("/articles", artRoutes);
app.use("/user", userRoutes);


const PORT = process.env.PORT;

app.listen(PORT, '0.0.0.0',  () => {
    console.log("Server is running !")
});
