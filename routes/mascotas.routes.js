const Controller=require("../controllers/mascotas.controller");
module.exports=app=>{
    app.get('/mascotas',Controller.finallmascotas);
    app.get('/mascotas/:tipo',Controller.findcategoria);
    app.get('/mascota/:_id',Controller.findoneitem);
    app.put('/mascota/like',Controller.darlike);
    app.put('/mascota/dislike',Controller.dardislike);
}