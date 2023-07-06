const express = require("express");
const router = express.Router();
//importar controladores
const {
  findcategoria,
  darlike,
  dardislike,
  getMascotas,
  getMascota,
  createMascota,
  deleteMascota,
  updateMascota,
} = require("../controllers/mascotas.controller");

// rutas existentes
router.get("/all" , getMascotas)
router.get("/single/:id", getMascota);
router.get("/category/:id" , findcategoria)
router.put("/like", darlike);
router.put("/dislike", dardislike);

// rutas crud
router.post("/", createMascota);
router.delete("/:id", deleteMascota);
router.put("/:id", updateMascota);

module.exports = router;
