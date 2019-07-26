//const dbConnection = require('../../config/dbConnection');
const ConsumerModel = require('../models/Model');
const tableName = 'Consumer';
const consumer = new ConsumerModel();

module.exports = (app) => {

    app.get('/', (req, res) => {

         consumer
            .fetch()
            .then(
                result => {
                    res.json(result);
                    console.log(result);
                }
            )
            .catch(
                err => {
                    res.json(err);
                    console.log(err);
                }
            );
        /*let connection = mysql.createConnection(dbConnection);
        connection.connect();
        let Customer = model(connection, tableName, 'idUser');
        new Customer()
            .fetch()
            .then(
                result => {
                    res.json(result);
                    console.log(result);
                })
            .catch(
                err => {
                    res.json(err);
                    console.log(err.message);
                }
            );
        */
        console.log("peticion GET");
    });
};