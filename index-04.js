// MIDDLEWARE logger

const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Method: ${req.method}`)
    next()
})

app.use((req, res, next) => {
    if (req.query.login === 'yisus@jaybetterbeats.com') {
        next()
    }else {
        res.send('No autorizado')
    }
})

// Route
app.get('/dashboard', (req,res) => {
    res.send('Dashboard page')
})

app.listen(3001);
console.log(`Server on port ${3001}`);         //http://localhost:3001/dashboard?login=yisus@jaybetterbeats.com