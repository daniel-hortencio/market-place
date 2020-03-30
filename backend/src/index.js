//Importando o módulo express
const express = require('express')
const routes = require('./routes')

//Inciando/criando minha aplicação
const app = express()

app.use(express.json())
app.use(routes)

//Mandando a aplicação ouvir a porta 3333
app.listen(3333)