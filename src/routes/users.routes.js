const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

//middlewares----------------------------------------------------------------------
const checkUsersExist = require("../middlewares/informationUser/checkUsersExists");
const checkNameUserExists = require("../middlewares/informationUser/checkNameUserExists");
const checkEmailUse = require("../middlewares/informationUser/checkEmailUse");
const checkFoneUserExists = require("../middlewares/informationUser/checkFoneUserExists.");
const checkCpfUserExists = require("../middlewares/informationUser/checkCpfUserExists");
//---------------------------------------------------------------------------------

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/",
    checkNameUserExists,
    checkEmailUse,
    checkFoneUserExists,
    checkCpfUserExists,
  usersController.createUser);

usersRoutes.get("/", usersController.listUser);
usersRoutes.get("/:user_id", usersController.listUserById);
usersRoutes.put("/update/:user_id", usersController.updateUser);
usersRoutes.delete("/delete/:user_id",checkUsersExist, usersController.deleteUser);

module.exports = usersRoutes;
