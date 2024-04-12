const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: 'localhost',
      database: 'projeto_integrador',
      user:     'root',
      password: ''
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  },
};