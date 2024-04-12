
exports.up = (knex) => {
    return knex.schema.createTable("adm", (table) => {
        table.increments('id').primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("fone").notNullable();
        table.string("cpf").notNullable();
        table.boolean("isAdmin").defaultTo("true")
        table.string("passwordAdm").notNullable();

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("adm")
};

