const knex = require("../../database/knex")
const AppError = require('../../utils/AppError');

class UserRepository {
    async createUser ({name, email, password, fone, cpf}) {

        const isAdmin = false

        const userId = await knex("users").insert({name, email, password, fone, cpf, isAdmin})

        return {id: userId}
    }
    async listUsers() {
        const users = await knex("users")
        return users
    }
    async listUserById({user_id}) {
        const user = await knex("users").where({id: user_id})
        return user
    }
    async updateUser({name, email, password, fone, cpf, user_id}) {
        const [user] = await knex("users").where({id: user_id})
        console.log(user.email);
        if (user.email && user.id !== user_id) {
            throw new AppError('Este email já está em uso')
          }
        user.email = email ?? user.email
        user.password = password ?? user.password
        user.name = name ?? user.name
        user.fone = fone ?? user.fone
        user.cpf = cpf ?? user.cpf

        await knex("users").where({id: user_id}).update({name: user.name, email:user.email, password: user.password, fone: user.fone, cpf: user.cpf})

        return user
    }
    async deleteUser({user_id}) {
        return await knex("users").where({id: user_id}).delete()
    }
}

module.exports = UserRepository