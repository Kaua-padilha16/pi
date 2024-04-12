const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const checkEmailUse = require("../middlewares/checkEmailUse")
const checkUsersExist = require("../middlewares/checkUsersExists")

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", checkEmailUse, usersController.createUser);
usersRoutes.get("/", usersController.listUser)
usersRoutes.get("/:user_id", usersController.listUserById)
usersRoutes.put("/update/:user_id", usersController.updateUser)
usersRoutes.delete("/delete/:user_id", checkUsersExist, usersController.deleteUser)
usersRoutes.patch("/adm/:user_id", usersController.updateUserAdmin)

module.exports = usersRoutes;