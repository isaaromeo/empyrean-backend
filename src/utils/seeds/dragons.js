const dragons = require("../../data/dragons");
const Dragon = require("../../api/models/dragon")
const mongoose = require("mongoose")

//nos conectamos para cargar los libros y nos volvemos a desconectar

mongoose
  .connect(
    "mongodb+srv://isa:4V4ngr1d@cluster0.75ble.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    //buscamos TODOS los libros de nuestra coleccion
    const allDragons = await Dragon.find();

    //si existen libros borramos la coleccion
    if (allDragons.length) {
      await Dragon.collection.drop();
    }
  })
  .catch((err) => {
    console.log(`Error removing collection: ${err}`);
  })
  .then(async () => {
    //rellenamos de nuevo con nuestro array de dragons
    await Dragon.insertMany(dragons);
    console.log("dragons added successfully!");
  })
  .catch((err) => {
    console.log(`Error adding new dragons: ${err}`);
  })
  .finally(() => mongoose.disconnect());