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
                            connection.json(result);
                            console.log(result);
                        })
                    .catch(
                        err => {
                            connection.json(err);
                            console.log(err.message);
                        }
                    );
                
                console.log("peticion GET");
    });
};