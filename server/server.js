const express = require('express');
const app = express();
const port = 5000;
const json = require('./data/db.json');

app.get("/api", (req, res) => {
    res.json(json);
})

app.listen(port, () =>{console.log(`${port}`)})