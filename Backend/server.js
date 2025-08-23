const express = require('express');
const cors = require('cors');

const app= express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.listen(process.env.PORT , () => {
    console.log("Server is running !")
});
