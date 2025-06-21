//PARAMS

const express = require("express");
const app = express();

app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username}`);
});

app.listen(3001);
console.log(`Server on port ${3001}`);
