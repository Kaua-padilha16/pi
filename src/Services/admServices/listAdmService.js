class ListAdmService{
    constructor(admRepository){
        this.admRepository = admRepository
    }
    async execute(){
        const admListed = this.admRepository.listAdm()
        return admListed
    }
}

module.exports = ListAdmService