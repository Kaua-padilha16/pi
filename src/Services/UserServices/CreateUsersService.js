
class CreateUsersService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({name, email, password, fone, cpf}) {
        
        const userCreated = await this.userRepository.createUser({name, email, password, fone, cpf})
        return userCreated
        
    }
}

module.exports = CreateUsersService