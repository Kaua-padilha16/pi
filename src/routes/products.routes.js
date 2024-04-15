const {Router} = require ("express")
const ProductController = require("../controllers/ProductController")
const checkProductExist = require("../middlewares/informationProducts/checkProductsExist")
const checkProductName = require("../middlewares/informationProducts/checkProductName")

const productsRoutes = Router()

const productController = new ProductController

productsRoutes.post("/", checkProductName,productController.createProducts)
productsRoutes.get("/", productController.listProducts)
productsRoutes.get("/:id", checkProductExist, productController.listProductsById)
productsRoutes.put("/:id", checkProductName, checkProductExist, productController.updateProducts)
productsRoutes.delete("/:id", checkProductExist, productController.deleteProducts)
productsRoutes.patch("/disponibilidade/:id", productController.updateDisponibilidade)

module.exports = productsRoutes
