var express = require("express");

var app = express();
app.set("view engine","jade");

app.get("/",function(req,res){
    console.log("Peticion recibida");
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
    //res.send("Hola Mundo...");
    res.render("index",{data: "Welcome to NodeJS"});
});

app.listen(8081);