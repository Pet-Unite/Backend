const Controller = require("../controllers/user.controllers");
module.exports = (app) => {
  app.post("/register", Controller.register);
  app.post("/login", Controller.login);
};
