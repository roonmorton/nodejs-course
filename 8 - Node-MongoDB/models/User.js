var mongoose = require("mongoose");
/*
mongoose.connect('mongodb+srv://Ron:Adminn@test-rmhjh.gcp.mongodb.net/SchemaTest?retryWrites=true&w=majority',
{ useNewUrlParser: true},
err =>{
    if (err) throw err;
        console.log(`Successfully connected to database.`);
});*/


//promise
mongoose.connect(
    'mongodb+srv://Ron:Admin@test-rmhjh.gcp.mongodb.net/SchemaTest?retryWrites=true&w=majority',
    { useNewUrlParser: true }
).then(
    () => {
        console.log("Conexión establecida...");
    },
    err => {
        if (err)
            console.log("No se ha establecido la conexion Error: " + err.stack)
    }
);


/*
Tipos de datos soportados por Mongoose
String
Number
Date
Bufer
Boolean
Mixed
Objecid
Array
*/
var possibleValue = ["M", "F"];
var user_schema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: "El usuario es requerido",
        maxlength: [50, "Nombre de usuario muy grande..."]
    },
    password: {
        type: String,
        minlength: [8, "Contraseña muy corta"],
        validate: {
            validator: function (p) {
                return this.password_confirmation == p;
            },
            message: "Contraseñas no son iguales..."
        }
    },
    age: {
        type: Number,
        min: [5, "La edad no puede ser menor que 5"],
        max: [105, "La edad no puede ser mayor que 102"]
    },
    email: {
        type: String,
        required: "Correo es obligatorio",
        match: [/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/, "Correo no es valido"]
    },
    date_of_create: {
        type: Date,
        default: Date.now
    },
    sex: {
        type: String,
        enum: {
            values: possibleValue,
            message: "Opcion no valida"
        }
    }
});


user_schema.virtual("password_confirmation")
    .get(function () {
        return this.p_confirmation;
    })
    .set(function (password) {
        this.p_confirmation = password;
    });

var User = mongoose.model("User", user_schema);

module.exports.User = User;
