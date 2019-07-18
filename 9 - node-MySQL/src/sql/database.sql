CREATE DATABASE new_test;

USE new_test;

CREATE TABLE Consumer(
    idCustomer int NOT NULL AUTO_INCREMENT,
    name varchar(75),
    last_name varchar(75),
    email varchar(75),
    age INT,
    sex varchar(2),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idUser)
);

DESCRIBE Consumer;

INSERT INTO Consumer(name,last_name,email,age,sex) VALUES('Ron','Quevedo','roonmorton@gmail.com',25,'M');

SELECT * FROM Consumer;