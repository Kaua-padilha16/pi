
exports.up = (knex) => {
    return knex.schema.createTable("shopping", (table) => {
        table.increments('id').primary();
        table.integer("user_id").unsigned().index().references("id").inTable("users");
        table.integer("product_id").unsigned().index().references("id").inTable("products");
        table.boolean("status").defaultTo("true")

    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("shopping")
};

