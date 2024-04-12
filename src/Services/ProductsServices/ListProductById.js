class ListByIdProductsService{
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
        async execute({id}){
        const productListed = await this.productsRepository.listProductsById({id})
        return productListed
    }
}

module.exports = ListByIdProductsService