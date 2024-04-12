const knex = require ("../database/knex")

async function checkAdm (req, res, next){
    const adm = await knex("adm")

    if(adm.length === 1){
        return res.status(400).json("Adm já criado, limite cheio")
    }

    next()
}

module.exports = checkAdm 