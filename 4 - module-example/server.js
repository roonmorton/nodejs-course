var http = require("http");
var parse = require("./params_parse.js.js");

http.createServer(function(req,res){
    res.write(parse.parse(req) + " desde NodeJS");
    res.end();
}).listen(8081);