const express = require ('express');
const db = require('./config/db')



const app = express();

app.use(express.json());

require("./routes/user.routes")(app);
require("./routes/mascotas.routes")(app);
require("./routes/comentarios.routes")(app);


app.get("/", (req, res)=>{
    res.send('Servidor trabajando' + port);
});
app.use(express.static("public"));

const port = process.env.PORT || 8000;

app.listen(port, ()=> 'servidor trabajando en el puerto');