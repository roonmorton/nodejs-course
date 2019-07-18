const dbConnection = require('../../config/dbConnection');
const tableName = 'Consumer';

module.exports = (app, mysql, model) => {

    app.get('/', (req, res) => {
        

        //for(i=0;i<1000;i++){
                let connection = mysql.createConnection(dbConnection);
                connection.connect();
                let Customer = model(connection, tableName, 'idUser');
                new Customer()
                    .fetch()
                    .then(
                        result => {
                            console.log(result);
                            //console.log("complete: " + complete);
                        })
                    .catch(
                        err => {
                            console.log(err.message);
                            //console.log("error: " + error);
                        }
                    );
                connection.end();
                console.log("peticion GET");
            //}
        //console.log(benchmarkjs.results);
        /*res.send({
            complete: complete,
            errro: error
        });*/
    });
};