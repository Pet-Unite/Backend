const express = require("express");
const mongoose = require("mongoose");

const Mascota = require("../models/mascota.model");

const findcategoria = async (req, res) => {
  Mascota.find({ tipo: req.params.tipo })
    .then((r) => res.json({ results: r }))
    .catch((e) => res.json({ e }));
};

const darlike = (req, res) => {
  Mascota.findByIdAndUpdate(
    req.params._id,
    { $inc: { like: 1 } },
    { new: true }
  )
    .then(() => res.json({ results: "+1" }))
    .catch((e) => res.json({ e }));
};
const dardislike = (req, res) => {
  Mascota.findByIdAndUpdate(
    req.params._id,
    { $inc: { like: -1 } },
    { new: true }
  )
    .then(() => res.json({ results: "-1" }))
    .catch((e) => res.json({ e }));
};

// CRUD MASCOTAS

// Get all mascotas
const getMascotas = async (req, res) => {
  const mascotas = await Mascota.find({}).sort({ createdAt: -1 });
  res.status(200).json(mascotas);
};

// Get single mascota
const getMascota = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "El id es invalido" });
  }
  const mascota = await Mascota.findById(id);
  if (!mascota) {
    return res.status(404).json({ error: "No existe la mascota" });
  }
  res.status(200).json(mascota);
};

// Create mascota
const createMascota = async (req, res) => {
  const { tipo, raza, src, longevidad, origen, tamaño, historia } = req.body;

  let emptyFields = [];

  if (!tipo) {
    emptyFields.push("tipo");
  }
  if (!raza) {
    emptyFields.push("raza");
  }
  if (!src) {
    emptyFields.push("src");
  }
  if (!longevidad) {
    emptyFields.push("longevidad");
  }
  if (!origen) {
    emptyFields.push("origen");
  }
  if (!tamaño) {
    emptyFields.push("tamaño");
  }
  if (!historia) {
    emptyFields.push("historia");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Por favor, ingresa los siguientes datos:", emptyFields });
  }

  // agregar a db
  try {
    const mascota = await Mascota.create({
      tipo,
      raza,
      src,
      longevidad,
      origen,
      tamaño,
      historia,
    });
    res.status(200).json(mascota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete mascota
const deleteMascota = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "El id es invalido" });
  }

  const mascota = await Mascota.findOneAndDelete({ _id: id });

  if (!mascota) {
    return res.status(400).json({ error: "La mascota no existe" });
  }

  res.status(200).json(mascota);
};

// update mascota
const updateMascota = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Id invalido" });
  }

  const mascota = await Mascota.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!mascota) {
    return res.status(400).json({ error: "No existe la mascota" });
  }

  res.status(200).json(mascota);
};

module.exports = {
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
};
