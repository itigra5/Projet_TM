const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');
const artRoutes =require('./routes/articlesRoutes');
const userRoutes =require('./routes/userRoutes');
const sequelize = require('./lib/db');

const app= express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("merci, ça marche !");
});

// Routes
app.use("/categories", catRoutes);
app.use("/articles", artRoutes);
app.use("/user", userRoutes);


const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
    console.log("Server is running !")
});
