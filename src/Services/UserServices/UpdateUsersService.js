
class UpdateUsersService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({name, email, password, fone, cpf, user_id}) {
        const updateUser = await this.userRepository.updateUser({name, email, password, fone, cpf, user_id})
        return updateUser
    }
}

module.exports = UpdateUsersService