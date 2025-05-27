const {getBooks, getBookByName } = require("../controllers/book");

const booksRouter =  require("express").Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:name", getBookByName);



module.exports = booksRouter;