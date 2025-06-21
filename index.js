const express = require("express");
const app = express();

app.use(express.text());
app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("Nuevo usuario creado");
});

app.listen(3001);
console.log(`Server on port ${3001}`);
