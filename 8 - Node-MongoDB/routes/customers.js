var router = require("express").Router();
var Customer = require("../models/Customer.js");


/* REST Users*/

/* Recurso a un usuario */
router.route('/Customer/:id')
    .get(// Obtener
        (req, res) => {
            Customer.findById(
                req.params.id,
                (err, customer) => {
                    if (err) {
                        console.error(err.stack);
                        res.status(500).send('Acurrio un error.!!!');
                    } else {
                        res.send(customer);
                    }
                });
        }
    )
    .put(// Actualizar
        (req, res) => {
            Customer.findById(
                req.params.id,
                (err, customer) => {
                    if (err) {
                        console.error(err.stack);
                        res.status(500).send('Acurrio un error.!!!');
                    } else {
                        customer.names = req.body.names;
                        customer.last_name = req.body.last_name;
                        customer.dpi = req.body.dpi;
                        customer.nit = req.body.nit;
                        customer.phone = req.body.phone;
                        customer.age = req.body.age;
                        customer.email = req.body.email;
                        customer.sex = req.body.sex;
                        customer
                            .save()
                            .then(
                                (result) => {
                                    console.log("Se actualizo un cliente");
                                    result.message = ['Se actualizo el Cliente...'];
                                    res.send(result);
                                })
                            .catch(
                                (err) => {
                                    console.log(String(err));
                                    res.send(err);
                                });
                        //res.send(customer);
                    }
                });

        }
    )
    .delete( //Borrar 
        (req, res) => {
            Customer.findByIdAndDelete(
                { "_id": req.params.id }
                )
                .then(
                    (result) => {
                        console.log("Registro eliminado...");
                        res.send(result);
                    }
                ).catch(
                    err => {
                        console.log(String(err));
                        res.send(String(err));
                    });
        }
    );


/* Recurso para una coleccion de usuarios */
router.route('/Customer/')
    .get( // Obtener
        (req, res) => {
            Customer.find(
                (err, doc) => {
                    if (err) {
                        console.error(err.stack);
                        res.status(500).send('Acurrio un error.!!!');
                    } else {
                        res.send(doc);
                    }
                }
            );
        }
    )
    .post( // Insertar
        (req, res) => {
            new Customer(
                {
                    names: req.body.names,
                    last_name: req.body.last_name,
                    dpi: req.body.dpi,
                    nit: req.body.nit,
                    age: req.body.age,
                    phone: req.body.phone,
                    email: req.body.email,
                    sex: req.body.sex,
                    creator: req.body.creator
                })
                .save()
                .then(
                    result => {
                        console.log("Se almaceno el cliente...");
                        result.message = ['Se almaceno el Cliente...'];
                        console.log("id: " +  result.creator);
                        res.send(result);
                    })
                .catch(
                    err => {
                        console.log(String(err));
                        res.send(err);
                    });
        }
    );

module.exports = router;