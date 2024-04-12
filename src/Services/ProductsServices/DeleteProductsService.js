class DeleteProductsService{
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
        async execute({id}){
        const productListed = await this.productsRepository.deleteProducts({id})
        return productListed
    }
}

module.exports = DeleteProductsService