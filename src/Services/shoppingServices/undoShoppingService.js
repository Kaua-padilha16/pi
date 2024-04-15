class UndoShoppingService {
    constructor(shoppingRepository){
        this.shoppingRepository = shoppingRepository
    }
    async execute({id}) {
        const update1 = await this.shoppingRepository.undoShopping({id})
        return update1
    }
}

module.exports = UndoShoppingService