const { Router } = require("express");

/*const checkEmailUse = require("../middlewares/checkEmailUse")
const checkUsersExist = require("../middlewares/checkUsersExists");*/
const checkAdm = require("../middlewares/checkAdm")
const AdmController = require("../controllers/admController");

const admRoutes = Router();

const admController= new AdmController();

admRoutes.post("/", checkAdm, admController.createAdm);
admRoutes.get("/", admController.listAdm)
admRoutes.put("/:id", admController.updateAdm)
admRoutes.delete("/:id", admController.deleteAdm)

module.exports = admRoutes;