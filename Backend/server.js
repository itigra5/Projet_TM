const express = require('express');
const cors = require('cors');
const catRoutes = require('./routes/cathegoriesRoutes');

const app= express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Word');
});

// Routes
app.use("/categories", catRoutes);


app.listen(process.env.PORT , () => {
    console.log("Server is running !")
});
