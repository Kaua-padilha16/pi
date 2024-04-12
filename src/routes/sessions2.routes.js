const { Router } = require('express');
 
const SessionsControllerUsers = require('../controllers/SessionsController2');
const sessionsControllerUsers = new SessionsControllerUsers();
 
const sessionsRoutes2 = Router();
sessionsRoutes2.post("/", sessionsControllerUsers.createUser);
 
module.exports = sessionsRoutes2;