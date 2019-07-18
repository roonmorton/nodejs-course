const dbConnection = require('../../config/dbConnection');
const tableName = 'Consumer';

module.exports = (app, mysql, model) => {

    app.get('/', (req, res) => {
                let connection = mysql.createConnection(dbConnection);
                connection.connect();
                let Customer = model(connection, tableName, 'idUser');
                new Customer()
                    .fetch()
                    .then(
                        result => {
                            console.log(result);
                        })
                    .catch(
                        err => {
                            console.log(err.message);
                        }
                    );
                connection.end();
                console.log("peticion GET");
    });
};