const express = require('express')

const app = express()              // (app) es como decir "server"

app.get('/',(req, res) => {
    res.send('Hello World')
    })

//**ROUTING//
app.get('/about',(req, res) => {
    res.send('About')
    })

app.get('/weather',(req, res) => {
    res.send('The current weather is nice')
    })

app.use((req, res)=> {
    res.status(404).send('No se encontro tu pagina')
})

app.listen(3001)
console.log(`Server on port ${3001}`)