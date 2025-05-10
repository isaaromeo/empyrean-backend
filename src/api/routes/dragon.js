const {getDragons, getDragonByName } = require("../controllers/dragon");

const dragonsRouter =  require("express").Router();

dragonsRouter.get("/", getDragons);
dragonsRouter.get("/:name", getDragonByName);

module.exports = dragonsRouter;