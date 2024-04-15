const knex = require("../../database/knex");
const AppError = require("../../utils/AppError");

async function checkCpfUserExists(req, res, next) {
  const { cpf } = req.body;
  try {
    const [userP] = await knex("users").where({ cpf });

    if (userP) {
      throw new AppError("Este cpf já está em uso.", 400);
    }

    next();
  } catch(error) {
    return res.status(400).json(error.message);
  }
}

module.exports = checkCpfUserExists;
