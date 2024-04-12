class UpdateProductsService{
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
    async execute({id, nome, quantidade, ingrediente, valor, fabricação, validade}){
        const productUpdated = await this.productsRepository.updateProducts({id, nome, quantidade, ingrediente, valor, fabricação, validade})
        return productUpdated
    }
}

module.exports = UpdateProductsService