//Creamos el servidor
const express = require("express");
const app = express();
const port = 3001;

//Consfiguramos el dotenv
require("dotenv").config()

//Configuramos Cloudinary
const { connectCloudinary } = require("./src/config/cloudinary")
connectCloudinary();


//traemos enrutador characters
const charactersRouter = require("./src/api/routes/character");
//traemos enrutador dragons
const dragonsRouter = require("./src/api/routes/dragon");
// const usersRoutes = require('./src/api/routes/user');

//conectamos bbdd
const { connectDB } = require("./src/config/db")
connectDB();

//recoger datos en json
app.use(express.json());

//rutas servidor
// app.use("/api/books", booksRouter);

app.use("/api/characters", charactersRouter);
app.use("/api/dragons", dragonsRouter);

// app.use("/api/user", usersRoutes);
//rutas sin respuesta
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})
//si no se recoge anteriormente el error
app.use((error, req, res, next) => {
    console.log(error)
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
  })
//servidor escuchando puerto
app.listen(port, () => {
    console.log("http://localhost:3001");
})