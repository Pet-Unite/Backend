const mongoose =require("mongoose");

const comentariosSchema=mongoose.Schema({
    usuarioid:{type:String,require},
    texto:{type:String,require},
    like:{type:Number,default:0},
    dislike:{type:Number,default:0},
    subcoment:{type:Array}
    
},{
    timestamps:true,
})
const ComentariosModel=mongoose.model('comentarios',comentariosSchema)
module.exports= ComentariosModel