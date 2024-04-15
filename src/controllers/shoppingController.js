const knex = require("../database/knex")

const ShoppingRepository = require("../Repositories/shoppingRepository/shoppingRepositoy");
const CreateShoppingService = require("../Services/shoppingServices/createShoppingService");
const ListShoppingService = require("../Services/shoppingServices/listShoppingService");
const TotalShoppingService = require("../Services/shoppingServices/totalShoppingService");
const UndoShoppingService = require("../Services/shoppingServices/undoShoppingService");

const shoppingRepository = new ShoppingRepository;
const createShoppingService = new CreateShoppingService(shoppingRepository)
const listShoppingService = new ListShoppingService(shoppingRepository)
const undoShoppingService = new UndoShoppingService(shoppingRepository)
const totalShoppingService = new TotalShoppingService(shoppingRepository)

class ShoppingController {
    async createShopping(req, res) {
        const { user_id, product_id } = req.body

        const test = await createShoppingService.execute({user_id, product_id})

        return res.status(200).json(test)
    }

    async listShopping(req, res){
        const shop = await listShoppingService.execute()
        return res.status(201).json(shop)
    }
    
    async undoShopping(req, res) {
        const { id } = req.params

       await undoShoppingService.execute({ id })

        return res.status(200).json("Compra foi desfeita com sucesso, essa  compra não será contabilizada futuramente.")
    }

    async totalShopping(req, res) {
        const {user_id} = req.body

        const totalS = await totalShoppingService.execute({ user_id })

        return res.status(200).json(`O total de vendas é: ${totalS}.`)
    }
}
module.exports = ShoppingController