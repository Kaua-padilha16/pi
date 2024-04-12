const {Router} = require ("express")
const ProductController = require("../controllers/ProductController")
const checkProductExist = require("../middlewares/checkProductsExist")
const checkProductNome = require("../middlewares/checkProductNome")

const productsRoutes = Router()

const productController = new ProductController

productsRoutes.post("/products", checkProductNome,productController.createProducts)
productsRoutes.get("/products", productController.listProducts)
productsRoutes.get("/products/:id", checkProductExist, productController.listProductsById)
productsRoutes.put("/products/:id", checkProductNome, checkProductExist, productController.updateProducts)
productsRoutes.delete("/products/:id", checkProductExist, productController.deleteProducts)
productsRoutes.patch("/products/disponibilidade/:id", productController.updateDisponibilidade)

module.exports = productsRoutes
