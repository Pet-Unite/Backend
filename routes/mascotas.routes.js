const express = require("express");
const router = express.Router();
//importar controladores
const {
  finallmascotas,
  findcategoria,
  findoneitem,
  darlike,
  dardislike,
  getMascotas,
  getMascota,
  createMascota,
  deleteMascota,
  updateMascota,
} = require("../controllers/mascotas.controller");

// rutas existentes
router.get("/mascotas", finallmascotas);
router.get("/mascotas/:tipo", findcategoria);
router.get("/mascota/:_id", findoneitem);
router.put("/mascota/like", darlike);
router.put("/mascota/dislike", dardislike);

// rutas crud
router.get("/", getMascotas);
router.get("/:id", getMascota);
router.post("/", createMascota);
router.delete("/:id", deleteMascota);
router.put("/:id", updateMascota);

module.exports = router;
