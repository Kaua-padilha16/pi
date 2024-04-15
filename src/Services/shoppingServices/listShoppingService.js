class CreateShoppingService {
    constructor(shoppingRepository) {
        this.shoppingRepository = shoppingRepository
    }
    async execute() {

        const sho = await this.shoppingRepository.listShopping()
        return sho
    }
}
module.exports = CreateShoppingService