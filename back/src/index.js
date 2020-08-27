const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: '*',
    headers: "Origin, X-Requested-With, Content-Type, Accept",
    methods: "GET, POST, PUT, DELETE"
}))

//Informar ao App que estaremos utilizando json para as requisições
app.use(express.json())

app.use(routes)

app.listen(3333)