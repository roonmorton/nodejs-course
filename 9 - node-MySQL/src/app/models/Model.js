const mysqlBackBone = require('mysql-backbone');

module.exports = 
(con,tableName,idAttribute='id') => {
    return mysqlBackBone.Collection.extend(
        {
            connection: con,
            tableName: tableName,
            idAttribute: idAttribute
        }
    );
}

