class UpdateDisponibilidadeService {
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
    async execute({id}) {
        const dis = await this.productsRepository.updateDisponibilidade({id})
        return dis
    }
}

module.exports = UpdateDisponibilidadeService