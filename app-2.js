const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.get("/user", (req, res) => {
  // res.sendFile(__dirname + './elizabeth.png')
    res.json({
    name: "Yisus",
    lastname: "Capetillo",
    age: 30,
    points: [2, 4, 6, 8, 10],
    phonenumber: 4921601015,
    address: {
        city: "new york",
        street: "some street 123",
    },
    });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);
});

app.listen(3002);
console.log(`Server on port ${3002}`);
