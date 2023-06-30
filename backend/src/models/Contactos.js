const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactosSchema = new Schema({
    nombre:String,
    apellido:String,
    email:String,
    telefono:String,
    mensaje:String  
});

const Contactos = mongoose.model('contactos',ContactosSchema);

module.exports = Contactos;