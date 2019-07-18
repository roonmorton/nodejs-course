var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");
/*fs.readFile("./index.html",function(err,html){

});*/


var server = http.createServer(function(request, response){
    console.log("Peticion Recibida...");
    fs.readFile("./index.html",function(err,html){
        var names = "Ronaldo Quevedo";
        var html_string = html.toString();
        console.log(html_string);
        //Exprecion regular deberia de devolver {x} 
        var vars = html_string.match("/[^\{\}]+(?=\})/g");
        console.log(vars);
        for(var i = vars.length - 1; i >= 0; i--){
            var value = eval(vars[i]);
            html_string = html_string.replace("{"+vars[i]+"}",value);
        }
        
        response.writeHead("200",{"Content-Type": "text/html"});
        response.write(html_string);
        response.end();
    });
}).listen(8081);