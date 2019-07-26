/*const express = require('express');
const User = require('./models/User');
const app = express();

app.get("/",
    (req, res) => {

        //User.con.connect();
        new User.Model().fetch()
            .then(
                (result) => {
                    console.log(result);
                }
            ).catch(
                err => {
                    console.log("Error: " + err);
                }
            );
        //User.con.end();
//User.con.end();
        res.send("Completado");
    });

app.listen(8088, () => {
    console.log("Server on port: " + 8088);
}); */



const app = require('./config/server');
//const mysql = require("mysql");
//const model = require('./app/models/Model');

require('./app/routes/consumers')(app);
//require('./app/routes/consumers_test')(app);


app.listen(app.get('port'),() =>{
    console.log('Server on port: ' + app.get('port'));
});



