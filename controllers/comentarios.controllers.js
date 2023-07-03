const express = require("express");

const ComentarioModel = require("../models/comentarios.model");

module.exports.finallcoment=async(req,res)=>{
   try{
    const comentarios=await ComentarioModel.find();
    res.json({ comentarios});
   }catch(error){
    return res.status(400).json({message:error});
   }
}

module.exports.findoneitem=(req,res)=>{
    ComentarioModel.findOne({_id:req.params._id}).then(
        r=>res.json({results:r})
    ).catch(e=>res.json({e}));
}

module.exports.addcomentario=(req,res)=>{
    const { usuarioid, texto } = req.body
        const newComment = new ComentarioModel({ usuarioid, texto })
        try {
            newComment.save()
            res.json('Comment Registered successfully')
        } catch (error) {
            return res.status(400).json({ message: error });
        }
}
module.exports.deletecomentario=(req,res)=>{
    ComentarioModel.deleteOne({_id:req.params_id}).then(r=>res.json({results:r}))
    .catch(e=>res.json({e}));
}
module.exports.actualizarcomentario=(req,res)=>{
    ComentarioModel.updateOne({_id:req.params_id},req.body).then(r=>res.json({results:r}))
    .catch(e=>res.json({e}));
}