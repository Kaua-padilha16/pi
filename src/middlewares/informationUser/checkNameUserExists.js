const knex = require("../../database/knex");
const AppError = require("../../utils/AppError");

async function checkNameUserExists(req, res, next) {
  const { name } = req.body;
  try {
    const [userN] = await knex("users").where({ name });

    if (userN) {
      throw new AppError("Este nome já está em uso.", 400);
    }

    next();
  } catch(error) {
    return res.status(400).json(error.message);
  }
}

module.exports = checkNameUserExists;
