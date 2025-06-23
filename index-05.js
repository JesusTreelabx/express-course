// REST API CRUD SetUp. With Middleware MORGAN

const express = require("express");
const morgan = require('morgan')

const app = express();
const products = [
    {
        id: 1,
        name: "laptop",
        price: 3000
    }
]

// Middlewares
app.use(morgan('dev'))
app.use(express.json())


// Routes
// Obtener datos con GET
app.get('/products', (req, res) => {
    res.json(products)
})

// Crear datos con POST
app.post('/products', (req, res) =>  {
    console.log(req.body)
    res.send('Creating products')
})

app.listen(3001);
console.log(`Server on port ${3001}`);   