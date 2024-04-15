const knex = require("../../database/knex")

class ShoppingRepository {
    async createShopping({ user_id, product_id}){

        const status = true

        const testA = await knex("shopping").insert({ user_id, product_id, status})

        return {id: testA}
    }

    async listShopping(){
        const shop = await knex("shopping")
        return shop
    }

    async undoShopping({ id }){

        const compra = await knex("shopping").where({id}).update({status: false})
        return compra
    }
    
    async totalShopping({user_id}) {
    
        const [total] = await knex('shopping').where({user_id: user_id}).count({product: 'product_id'});
    
        return res.status(200).json(total);
    }
}
module.exports = ShoppingRepository