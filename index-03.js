// QUERIES
const express = require("express")

const app = express()

app.get('/search', (req, res) => {
    if (req.query.q === 'facebook photos') {
        res.send('album de photos')
    } else {
        res.send('pagina normal')
    }
})

app.listen(3001);
console.log(`Server on port ${3001}`);
