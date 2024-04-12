const knex = require("../database/knex")
const { hash } = require("bcryptjs");

const CreateUsersService = require("../Services/UserServices/CreateUsersService");
const ListUsersService = require("../Services/UserServices/ListUsersService");
const ListUserByIdService = require("../Services/UserServices/ListUserByIdService");
const UpdateUsersService = require("../Services/UserServices/UpdateUsersService");
const DeleteUsersService = require("../Services/UserServices/deleteUsersService");
const UpdateUserAdminService = require("../Services/UserServices/UpdateUserAdminService");

const UsersRepository = require("../Repositories/UsersRepositories/UsersRepository");
const usersRepository = new UsersRepository()

const createUsersService = new CreateUsersService(usersRepository)
const listUsersService = new ListUsersService(usersRepository)
const listUserByIdService = new ListUserByIdService(usersRepository)
const updateUsersService = new UpdateUsersService(usersRepository)
const deleteUsersService = new DeleteUsersService(usersRepository)
const updateUserAdminService = new UpdateUserAdminService(usersRepository)
//--------------------------------------------------------------------------------------------//

class UsersController {
    async createUser(req, res) {
    const {name, email, password, fone, cpf} = req.body;
    const hashedPassword = await hash(password, 8);

    const user = await createUsersService.execute({name, email, password: hashedPassword, fone, cpf})

    return res.status(201).json(user);
    }
    async listUser(req, res) {
        
    const users = await listUsersService.execute()

    return res.status(200).json(users)
    }
    async listUserById(req, res) {
        const {user_id} = req.params
        
        const user = await listUserByIdService.execute({user_id})

        return res.status(200).json(user)
    }
    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email, password, fone, cpf} = req.body

        await updateUsersService.execute({name, email, password, fone, cpf, user_id})

        return res.status(200).json("Usuário atualizado com sucesso!")
    }
    async updateUserAdmin(req, res) {
        const {user_id} = req.params

        await updateUserAdminService.execute({user_id})

        return res.status(200).json("Alterado com sucesso!!");
    }
    async deleteUser(req, res) {
        const {user_id} = req.params

        await deleteUsersService.execute({user_id})

        return res.status(200).json("Registro deletado com sucesso! Até mais!!")
    }
}


module.exports = UsersController;