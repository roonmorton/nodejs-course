
const mysql = require('mysql');
const mysqlBackBone = require('mysql-backbone');
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'new_test'
  });


  /*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'new_test'
});*/

var model = mysqlBackBone.Collection.extend({
    connection: pool,
    tableName: 'Consumer',
    idAtribute: 'idConsumer'
});



module.exports = model;
/*module.exports = 
(con,tableName,idAttribute='id') => {
    return mysqlBackBone.Collection.extend(
        {
            connection: con,
            tableName: tableName,
            idAttribute: idAttribute
        }
    );
}*/



