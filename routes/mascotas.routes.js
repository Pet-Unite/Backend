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
router.get("/mascotas/:tipo", findcategoria);
router.put("/mascota/like", darlike);
router.put("/mascota/dislike", dardislike);

// rutas crud
router.get("/", getMascotas);
router.get("/:id", getMascota);
router.post("/", createMascota);
router.delete("/:id", deleteMascota);
router.put("/:id", updateMascota);

module.exports = router;
