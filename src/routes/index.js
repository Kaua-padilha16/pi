const { Router } = require("express");

const usersRouter = require("./users.routes");
const productRoutes = require("./products.routes")
const sessionsRouter = require("./sessions.routes");
const admRouter = require("./adm.routes");
const sessionsRouter2 = require("./sessions2.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/", productRoutes);
routes.use("/sessions", sessionsRouter);
routes.use("/adm", admRouter);
routes.use("/sessionsUser", sessionsRouter2)


module.exports = routes;