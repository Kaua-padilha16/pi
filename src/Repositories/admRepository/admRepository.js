const knex = require("../../database/knex")

class admRepository {
    async createAdm ({name, email, password, fone, cpf, passwordAdm}) {

        const isAdmin = true

        const admId = await knex("adm").insert({name, email, password, fone, cpf, isAdmin, passwordAdm})

        return {id: admId}
    }
    async listAdm(){
        const adm = await knex("adm")
        return adm
    }
    async updateAdm({id, name, email, password, fone, cpf, passwordAdm}){
        const adm = await knex("adm").where({id})

        adm.name = name ?? adm.name
        adm.email = email ?? adm.email
        adm.password = password ?? adm.password
        adm.fone = fone ?? adm.fone
        adm.cpf = cpf ?? adm.cpf
        adm.passwordAdm = passwordAdm ?? adm.passwordAdm
        
        await knex("adm").where({id}).update({name: adm.name, email: adm.email, password: adm.password, fone: adm.fone, cpf: adm.cpf, passwordAdm: adm.passwordAdm})

        return adm
    }
    async deleteAdm({id}){
        return await knex("adm").where({id}).delete()
    }
}
module.exports = admRepository