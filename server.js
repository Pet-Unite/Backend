///////////////////
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//importar rutas
const mascotasRoutes = require("./routes/mascotas.routes");
const usersRoutes = require("./routes/user.routes");
const comentariosRoutes = require("./routes/comentarios.routes");

// MONGO DB URL
const url =
  "mongodb+srv://admin:1234@cluster0.7hznz3l.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar los encabezados CORS
app.use(
  cors({
    origin: "http://localhost:5173", // URL FRONTEND
    credentials: true,
  })
);
app.use(express.static("public"));

//middleware para loggear los request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// middleware de rutas
app.use("/api/user", usersRoutes);
//OJO DEBE SER /api/mascotas
app.use("/", mascotasRoutes);
app.use("/api/comentarios", comentariosRoutes);

//conectar a la base de datos
mongoose
  .connect(url)
  .then(() => {
    app.listen(8000, () => {
      console.log("Escuchando en puerto:", 8000);
    });
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log(err);
  });
