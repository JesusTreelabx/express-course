const express = require('express')

const app = express()              // (app) es como decir "server"

app.get('/',(req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})


//**ROUTING//







app.listen(3001)
console.log(`Server on port ${3001}`)