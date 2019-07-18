var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");
fs.readFile("./index.html",function(err,html){
    
});


var server = http.createServer(function(request, response){
    console.log("Peticion Recibida...");
    response.writeHead("404",{
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify({nombre: "Ronaldo", username: "ron"} ));
    response.end();
}).listen(8081);