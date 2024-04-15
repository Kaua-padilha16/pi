const { Router } = require("express")
const ShoppingController = require("../controllers/shoppingController")

const shoppingRoutes = Router()
const shoppingController = new ShoppingController

shoppingRoutes.post("/", shoppingController.createShopping)
shoppingRoutes.get("/", shoppingController.listShopping)
shoppingRoutes.get("/total", shoppingController.totalShopping)
shoppingRoutes.patch("/status/:id", shoppingController.undoShopping)

module.exports = shoppingRoutes