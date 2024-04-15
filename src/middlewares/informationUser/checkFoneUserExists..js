const knex = require("../../database/knex");
const AppError = require("../../utils/AppError");

async function checkFoneUserExists(req, res, next) {
  const { fone } = req.body;
  try {
    const [userF] = await knex("users").where({ fone });

    if (userF) {
      throw new AppError("Este fone já está em uso.", 400);
    }

    next();
  } catch(error) {
    return res.status(400).json(error.message);
  }
}

module.exports = checkFoneUserExists;
