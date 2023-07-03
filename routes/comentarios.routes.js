const Controller=require("../controllers/comentarios.controllers");
module.exports=app=>{
    app.get('/comentarios',Controller.finallcoment);
    app.get('/comentarios/:id',Controller.findoneitem);
    app.put('/comentarios/:id',Controller.actualizarcomentario);
    app.delete('/comentarios/:id',Controller.deletecomentario);
    app.post('/comentarios',Controller.addcomentario);
}