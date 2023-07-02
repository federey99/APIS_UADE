const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuariosSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    password:String
});

const Usuarios = mongoose.model('usuarios',UsuariosSchema); //nombre de la colección en la bdd

module.exports = Usuarios;