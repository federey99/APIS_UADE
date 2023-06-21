const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactosSchema = new Schema({
    Nombre:String,
    Apellido:String,
    Domicilio:String,
    Mail:String,
    Mensaje:String    
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;