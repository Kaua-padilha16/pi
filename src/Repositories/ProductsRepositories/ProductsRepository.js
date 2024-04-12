const knex = require("../../database/knex")

class ProductRepository{
    async createProducts({nome, quantidade, ingredientes, valor, fabricação, validade}){

        const disponibilade = true

        const productId = await knex("products").insert({nome, quantidade, ingredientes, valor, fabricação, validade, disponibilade})

        return{id: productId}
    }

    async listProducts(){
        const products = await knex("products")
        return products
    }

    async listProductsById({id}){
        const products = await knex("products").where({id})
        return products
    }
    async updateProducts({id, nome, quantidade, ingredientes, valor, fabricação, validade}){

        const products = await knex("products").where({id})

        products.nome = nome ?? products.nome
        products.quantidade = quantidade ?? products.quantidade
        products.ingredientes = ingredientes ?? products.ingredientes
        products.valor = valor ?? products.valor
        products.fabricação = fabricação ?? products.fabricação
        products.validade = validade ?? products.validade
        

        await knex("products").update({nome: products.nome, quantidade: products.quantidade, ingredientes: products.ingredientes, valor: products.valor, fabricação: products.fabricação, validade: products.validade, disponibilidade: products.disponibilidade})

        return products
    }
    async deleteProducts({id}){
        const products = await knex("products").where({id}).delete()
        return products
    }
    async updateDisponibilidade({id}) {
        const dis = await knex("products").where({id}).update({disponibilade: false})
        return dis
    }
    
}

module.exports = ProductRepository