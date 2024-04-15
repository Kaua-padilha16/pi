class CreateShoppingService {
    constructor(shoppingRepository) {
        this.shoppingRepository = shoppingRepository
    }
    async execute({ user_id, product_id}) {

        const testAA = await this.shoppingRepository.createShopping({ user_id, product_id})
        return testAA
    }
}
module.exports = CreateShoppingService