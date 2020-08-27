const crypto = require('crypto')
const connection = require('../database/connection')

module.exports={
    async index(req, res){
        const products = await connection('products').select('*')

        return res.json(products)
    },

    async create(req, res){
        const { name, brand, gender, price } = req.body
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('products').insert({
            id, 
            name, 
            brand, 
            gender, 
            price,
        })
    
        return res.json({ id })
    },

    async delete(req, res){
        const { id } = req.params

        await connection('products').where('id', id).delete()

        return res.status(204).send()
    },

    async edit(req, res){
        const { name, brand, gender, price } = req.body
        const { id } = req.params
    
        await connection('products').where('id', id).update({
            name, 
            brand, 
            gender, 
            price,
        })
    
        return res.json({ id })
    },
}