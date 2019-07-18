var router = require("express").Router();
var User = require("../models/User.js").User;



router.get("/", (req, res) => {
    console.log("Peticion Recibida...");
    User.find(
        (err, doc) => {
            if (err) {
                console.error(err.stack);
                res.status(500).send('Acurrio un error.!!!');
            } else {
                res.send(doc);
            }
        });
})
    .post("/", (req, res) => {
        console.log("Peticion Recibida...");
        var user = new User(
            {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                age: req.body.age,
                sex: req.body.sex,
                password_confirmation: req.body.password_confirmation
            })
            .save().then(
                _user => {
                    console.log(_user);
                    res.send("Se guardo el usuario: " + _user);
                }
            ).catch(
                err => {
                    console.log(String(err));
                    res.send(err);
                });
    });

    module.exports = router;