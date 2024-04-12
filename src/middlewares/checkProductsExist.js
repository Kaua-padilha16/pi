const knex = require ("../database/knex")

async function checkProductExist (req, res, next){
    const {id} = req.params
    const products = await knex("products").where({id})

    if(products.length === 0){
        return res.status(400).json("Produto não encontrado")
    }

    next()
}

module.exports = checkProductExist