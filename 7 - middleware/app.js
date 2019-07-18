var express = require("express");1
var bodyParser = require("body-parser");

var app = express();

// Para añadir un middleware
// manejo de Errores
app.use(function(err,req,res,next){
    if(error)
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Servir archivos estaticos en el servidor
app.use("/res",express.static("public"));
app.use("/res",express.static("assets"));
// body-parser Obtener parametros de un formulario
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",function(req, res) {
    console.log("Peticion recibida...");
    res.send("GET - peticion Recibida");
});

app.post("/",function( req, res) {
    console.log("Peticion recibida...");
    console.log("Hola: " + req.body.name);
    res.send("POST - peticion Recibida");
});

app.listen(8081);