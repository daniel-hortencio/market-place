const express = require('express')

const ProductsController = require('./controllers/ProductsController')

const routes = express.Router()

routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.create)
routes.delete('/products/:id', ProductsController.delete)
routes.put('/products/:id', ProductsController.edit)

module.exports = routes
