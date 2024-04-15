const knex = require ("../../database/knex")

async function checkUsersExist (req, res, next){
    const {user_id} = req.params
    const products = await knex("users").where({id: user_id})

    if(products.length === 0){
        return res.status(400).json("Usuário não encontrado")
    }

    next()
}

module.exports = checkUsersExist