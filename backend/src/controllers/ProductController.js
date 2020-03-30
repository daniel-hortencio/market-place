const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(req, res){    
        const products = await connection('products').select('*')    
        return res.json(products)
    },


    async create(req, res){
        const { name, brand, gender, price, imageURL } = req.body

        const id = crypto.randomBytes(4).toString('HEX')
        await connection('products').insert({
            id,
            name,
            brand,
            gender,
            price,
            imageURL
        })
    
        return res.json(`Produto criado com sucesso! ID: ${id}`)
    },


    async delete(req, res){
        const { id } = req.params

        {/**const product = await connection('products')
            .where('id', id)
            .select('id')
    .first()*/}

        await connection('products').where('id', id).delete()

        return res.status(204).send()
    }
}