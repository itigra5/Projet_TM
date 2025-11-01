const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');
const artRoutes =require('./routes/articlesRoutes');
const userRoutes =require('./routes/userRoutes');
const sequelize = require('./lib/db');
const path = require('path');

const app= express();
app.use(cors())
app.use(express.json())


// Pour que Express s'occupe du front end

// Servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Rediriger toutes les requêtes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
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
