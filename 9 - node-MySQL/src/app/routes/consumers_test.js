var dbConnection = require('../../config/dbConnection');
const mysql = require("mysql");
module.exports = app => {
    //const connection = dbConnection();
    app.get('/customers', (req, res) => {
        /*const connection = mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'new_test'
            }
        );
        connection.connect(
            err => {
                if (err)
                    console.log('No se establecio la conecion ' + err.message);
                else {
                    connection.query("SELECT * FROM consumer",
                        (error, result, fields) => {
                            if (error)
                                console.log(error);
                            else {
                                console.log(result);
                            }
                        });
                        connection.end();
                }
            }
        );*/
/*connection.connect();
        connection.query("SELECT * FROM consumer",
                        (error, result, fields) => {
                            if (error)
                                console.log(error);
                            else {
                                console.log(result);
                            }
                        });
connection.end();*/
        /*connection.query("SELECT * FROM Consumer").then(
            (result,fields)=>{
                console.log(result);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        );*/
        console.log("peticion GET");
        res.send('Hola mundo');
    });
};