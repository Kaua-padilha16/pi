const knex = require("../database/knex");
const AppError = require("../utils/AppError");

async function checkProductNome(req, res, next) {
  const { nome } = req.body;
  try {
    const [product] = await knex("products").where({ nome });

    if (product) {
      throw new AppError("Este nome já está em uso.", 400);
    }

    next();
  } catch(error) {
    return res.status(400).json(error.message);
  }
}

module.exports = checkProductNome;
