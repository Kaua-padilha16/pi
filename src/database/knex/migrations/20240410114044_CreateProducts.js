exports.up = (knex) => {
    return knex.schema.createTable(
      "products", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("quantidade").notNullable();
    table.string("ingredientes").notNullable();
    table.string("valor").notNullable();
    table.string("fabricação").notNullable();
    table.string("validade").notNullable();
    table.boolean("disponibilade").defaultTo("true")
  });
}
  
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("products")
};
