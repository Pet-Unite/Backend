const mongoose =require("mongoose");

const mascotaSchema=mongoose.Schema({
    tipo:{type:String,require},
    raza: {type:String,require},
    src: {type:String,require},
    longevidad: {type:String,require},
    origen: {type:String,require},
    tamaño: {type:String,require},
    historia: {type:String,require},
    like: {type:Number,require},
    comentarios:{type:Array}
},{
    timestamps:true,
})
const MascotaModel=mongoose.model('mascotas',mascotaSchema)
module.exports=MascotaModel