
class deleteAdmService {
    constructor(admRepository) {
        this.admRepository = admRepository
    }
    async execute({id, name, email, password, fone, cpf, passwordAdm}) {
        const admDeleted = await this.admRepository.deleteAdm({id, name, email, password, fone, cpf, passwordAdm})
        return admDeleted
    }
}

module.exports = deleteAdmService