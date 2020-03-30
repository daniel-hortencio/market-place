//Importando o módulo express
const express = require('express')
const ProductController = require('./controllers/ProductController')
const crypto = require('crypto')
const connection = require('./database/connection')

const routes = express.Router()


routes.get('/products', ProductController.index)
routes.post('/products', ProductController.create)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes