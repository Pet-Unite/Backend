const Controller=require("../controllers/user.controllers");
module.exports=app=>{
    app.post('/user/register', Controller.register);
    app.post('/user/login',Controller.login);
    
}