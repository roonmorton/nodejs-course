var express = require("express");

var app = express();

app.get("/",function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send("Peticion Get");
});

app.post("/",function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send("Peticion POST");
});

app.get("/:name",function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send("Get - Bienvenido: " + req.params.name);
});

app.listen(8081);