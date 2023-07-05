const mongoose = require("mongoose");

const mascotaSchema = mongoose.Schema(
  {
    tipo: {
      type: String,
      require,
      enum: ["perro", "gato", "pajaro", "roedor"],
    },
    raza: {
      type: String,
      require,
    },
    src: {
      type: String,
      require,
      default: "No image url",
    },
    longevidad: {
      type: String,
      require,
    },
    origen: {
      type: String,
      require,
    },
    tamaño: {
      type: String,
      require,
    },
    historia: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comentarios: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const MascotaModel = mongoose.model("mascotas", mascotaSchema);
module.exports = MascotaModel;
