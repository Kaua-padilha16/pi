class TotalShoppingService {
    constructor(shoppingRepository) {
        this.shoppingRepository = shoppingRepository
    }
    async execute() {

        const to = await this.shoppingRepository.totalShopping()
        return to
    }
}
module.exports = TotalShoppingService