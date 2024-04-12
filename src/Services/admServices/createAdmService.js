class CreateAdmService {
    constructor(admRepository) {
        this.admRepository = admRepository
    }
    async execute({name, email, password, fone, cpf, passwordAdm}) {
        
        const admCreated = await this.admRepository.createAdm({name, email, password, fone, cpf, passwordAdm})
        return admCreated
        
    }
}

module.exports = CreateAdmService