class CreateProductsService{
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
    async execute({nome, quantidade, ingredientes, valor, fabricação, validade}){
        const productCreated = await this.productsRepository.createProducts({nome, quantidade, ingredientes, valor, fabricação, validade})
        return productCreated
    }
}

module.exports = CreateProductsService