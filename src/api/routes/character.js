const {getCharacters, getCharacterByName } = require("../controllers/character");

const charactersRouter =  require("express").Router();

charactersRouter.get("/", getCharacters);
charactersRouter.get("/:name", getCharacterByName);
// charactersRouter.post("/", isAuth, postcharacter);
// charactersRouter.put("/:id/:userId", isAuth, updatecharacter);
// charactersRouter.delete("/:id/:userId", isAuth, deletecharacter);
// charactersRouter.get("/:bookId", getBookcharacters); 


module.exports = charactersRouter;