const express = require("express");
const router = express.Router();
const db = require("../lib/db");

router.get('/', (req, res) => {
    const q="SELECT * FROM categorie"
    db.query(q,(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.json(data)
    });
});

module.exports = router;