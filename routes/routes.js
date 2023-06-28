const routes = require("express").Router();
const taskController = require("../controller/TaskController")

routes.get("/", taskController.getAll)

module.exports = routes;
