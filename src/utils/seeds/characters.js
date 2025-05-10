const characters = require("../../data/characters");
const Character = require("../../api/models/character")
const mongoose = require("mongoose")

//nos conectamos para cargar los libros y nos volvemos a desconectar

mongoose
  .connect(
    "mongodb+srv://isa:4V4ngr1d@cluster0.75ble.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    //buscamos TODOS los libros de nuestra coleccion
    const allCharacters = await Character.find();

    //si existen libros borramos la coleccion
    if (allCharacters.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => {
    console.log(`Error removing collection: ${err}`);
  })
  .then(async () => {
    //rellenamos de nuevo con nuestro array de characters
    await Character.insertMany(characters);
    console.log("characters added successfully!");
  })
  .catch((err) => {
    console.log(`Error adding new characters: ${err}`);
  })
  .finally(() => mongoose.disconnect());