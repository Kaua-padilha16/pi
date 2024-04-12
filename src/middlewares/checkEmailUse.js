const knex = require("../database/knex");
const AppError = require("../utils/AppError");

async function checkEmailUse(req, res, next) {
  const { email } = req.body;
  try {
    const [user] = await knex("users").where({ email });

    if (user) {
      throw new AppError("Este e-mail já está em uso.", 400);
    }

    next();
  } catch(error) {
    return res.status(400).json(error.message);
  }
}

module.exports = checkEmailUse;
