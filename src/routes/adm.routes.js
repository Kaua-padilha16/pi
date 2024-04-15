const { Router } = require("express");

const checkAdmExists = require("../middlewares/adm/checkAdmExists")
const AdmController = require("../controllers/admController");

const admRoutes = Router();

const admController= new AdmController();

admRoutes.post("/", checkAdmExists, admController.createAdm);
admRoutes.get("/", admController.listAdm)
admRoutes.put("/:id", admController.updateAdm)
admRoutes.delete("/:id", admController.deleteAdm)

module.exports = admRoutes;