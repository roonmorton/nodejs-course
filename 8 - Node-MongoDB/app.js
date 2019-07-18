var express = require("express");
var bodyParser = require("body-parser");
var user_routes = require("./routes/users.js");
var customerRoutes = require("./routes/Customers.js");

var token = require('./middlewares/token.js');
var app = express();

app.use(bodyParser.json());


app.use((err, req, res, next) => {
    if (error) {
        console.error(err.stack);
        res.status(500).send('A ocurrido un error!');
    }
});
app.get("/", (req, res) => {
    res.send("Completado");
});
app.use("/users", token);
app.use("/users", user_routes);

app.use('/app',token);
app.use('/app',customerRoutes);

app.listen(8081);