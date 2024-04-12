class ListProductsService{
    constructor(productsRepository){
        this.productsRepository = productsRepository
    }
    async execute(){
        const productListedById = await this.productsRepository.listProducts()
        return productListedById
    }
}

module.exports = ListProductsService