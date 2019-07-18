var http = require("http");

var handler = function(request, response){
    console.log("Peticion Recibida...");
    response.end("Hola mundo desde nodeJS!");
}

var server = http.createServer(handler);

server.listen(8081);