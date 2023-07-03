const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
    correo:{type:String,require},
    contra: {type:String,require},
    fav:{type:Array}
},{
    timestamps:true,
})
const UserModel=mongoose.model('user',userSchema)
module.exports=UserModel