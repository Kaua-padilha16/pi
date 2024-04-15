const ProductRepository = require("../Repositories/ProductsRepositories/ProductsRepository")
const CreateProductsService = require("../Services/ProductsServices/CreateProductsService")
const DeleteProductsService = require("../Services/ProductsServices/DeleteProductsService")
const ListByIdProductsService = require("../Services/ProductsServices/ListProductById")
const ListProductsService = require("../Services/ProductsServices/ListProductsService")
const UpdateProductsService = require("../Services/ProductsServices/UpdateProductsService")
const UpdateDisponibilidadeService = require("../Services/ProductsServices/updateDisponibilidadeService")
const knex = require("../database/knex")

const productsRepository = new ProductRepository()

const createProductsService = new CreateProductsService(productsRepository)
const listProductsService = new ListProductsService(productsRepository)
const listByIdProductsService = new ListByIdProductsService(productsRepository)
const updateProductsService = new UpdateProductsService(productsRepository)
const deleteProductsService = new DeleteProductsService(productsRepository)
const updateDisponibilidadeService = new UpdateDisponibilidadeService(productsRepository)

class ProductController{
    async createProducts(req, res){
        const {nome, quantidade, ingredientes, valor, fabricação, validade} = req.body
        
        await createProductsService.execute({nome, quantidade, ingredientes, valor, fabricação, validade})

        res.status(200).json("Produto Registrado")
    }

    async listProducts(req, res){
        const products = await listProductsService.execute()
        res.status(200).json(products)
    }

    async listProductsById(req, res){
        const {id} = req.params

        const product = await listByIdProductsService.execute({id})
        res.status(200).json(product)
    }

    async updateProducts(req, res){
        const {id} = req.params
        const {nome, quantidade, ingredientes, valor, fabricação, validade} = req.body

        await updateProductsService.execute({id, nome, quantidade, ingredientes, valor, fabricação, validade})

        res.status(200).json("Produto atualizado")
    }

    async deleteProducts(req, res){
        const {id} = req.params

        await deleteProductsService.execute({id})

        res.status(200).json("Produto deletado")
    }

    async updateDisponibilidade(req, res) {
        const {id} = req.params

        await updateDisponibilidadeService.execute({id})

        return res.status(200).json("Alterado com sucesso!!");
    }
    async totalProducts(req, res) {
        const total = await totalProducts.execute()
        return res.status(200).json(total)
    }
}

module.exports = ProductController