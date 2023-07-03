const express = require("express");

const MascotaModel = require("../models/mascota.model");

module.exports.finallmascotas=async(req,res)=>{
   try{
    const mascotas=await MascotaModel.find();
    res.json({mascotas});
   }catch(error){
    return res.status(400).json({message:error});
   }
}

module.exports.findcategoria=async(req,res)=>{
    MascotaModel.find({tipo:req.params.tipo}).then(
        r=>res.json({results:r})
    ).catch(e=>res.json({e}));
}
module.exports.findoneitem=(req,res)=>{
    MascotaModel.findOne({_id:req.params._id}).then(
        r=>res.json({results:r})
    ).catch(e=>res.json({e}));
}
module.exports.darlike=(req,res)=>{
    MascotaModel.findByIdAndUpdate(req.params._id,{$inc:{like:1}},{new:true})
    .then(
        ()=>res.json({results:"+1"})
    ).catch(e=>res.json({e}));
}
module.exports.dardislike=(req,res)=>{
    MascotaModel.findByIdAndUpdate(req.params._id,{$inc:{like:-1}},{new:true})
    .then(
        ()=>res.json({results:"-1"})
    ).catch(e=>res.json({e}));
}

