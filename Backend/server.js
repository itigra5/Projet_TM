const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');
const sequelize = require('./lib/db');
const artRoutes =require('./routes/articlesRoutes');

const app= express();
app.use(cors())
app.use(express.json())

app.get('/', (res, req) => {
    req.send("merci, ça marche !");
});

app.get('/hey', (req, res) => {
    res.send('Hello khtek');
});

// Routes
app.use("/categories", catRoutes);
app.use("/articles", artRoutes);


app.listen(3000 , () => {
    console.log("Server is running !")
});
