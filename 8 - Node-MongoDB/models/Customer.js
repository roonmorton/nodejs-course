var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    names: {
        type: String,
        required: 'El campo nombre es obligatorio',
        min: [2, "El nombre es muy corto"],
        max: [125, 'Los nombres son muy largos']
    },
    last_name: {
        type: String,
        required: false,
        min: [2, 'El apellido es muy corto'],
        max: [125, 'El apellido es demaciado largo']
    },
    dpi: {
        type: String,
        required: false,
        min: [13, 'DPI invalido'],
        max: [13, 'DPI Invalido']
    },
    nit: {
        type: String,
        required: false,
        min: [7, 'NIT invalido'],
        max: [8, 'NIT invalido']
    },
    phone: {
        type: String,
        required: false,
        min: [8, 'Telefono Invalido'],
        max: [8, 'Telefono Invalido']
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
    sex: {
        type: String,
        enum: {
            values: ["M", "F"],
            message: "Opcion no valida"
        }
    },
    create: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

customerSchema.virtual("full_name")
    .get(
        () => {
            return this.name + ' ' + this.last_name;
        });


var Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;