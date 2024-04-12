class UpdateAdmService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute({id, name, email, password, fone, cpf, passwordAdm}){
        const admUpdated = await this.admRepository.updateAdm({id, name, email, password, fone, cpf, passwordAdm})
        return admUpdated
    }
}

module.exports = UpdateAdmService