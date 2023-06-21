const UsuariosModel = require('../models/Usuarios');
const bcrypt = require('bcrypt');

class UsuariosService{

    async getUsers(){
        try{
            const users = await UsuariosModel.find(); // se hace asincrona para esperar una respuesta de la BDD
            return users;
        }catch (err){
            console.log(err);
            throw new Error("Error in getUsers Service");
        }
    }

    async getUserByID(id){
        try{
            let contact = await UsuariosModel.findOne({_id:id});
            return contact;
        }catch (err){
            console.log(err);
            throw new Error("Error in getUsersByID Service");
        }
    }

    async getUserByEmail(email){
        try{
            let user = await UsuariosModel.findOne({email});
            return user;
        }catch (err){
            console.log(err);
            throw new Error("Error in getUserByEmail Service");
        }
    }

    async createUser(user){
        try{
            let isuserRegistred = await UsuariosModel.findOne({email:user.email});
            if(isuserRegistred){
                throw new Error("User already registred");
            }else{
                user.password = bcrypt.hashSync(user.password,process.env.SALT);
                await UsuariosModel.create(user);
                return user;
            }
        } catch (err){
            console.error(err);
            throw new Error("Error in createUser Service");
        }
    }

    

    /*
    async createUser( name, lastname, email, password) {
        try {
          const newUsuario = new UsuariosModel({ name, lastname, email, password });
          const savedUsuario = await newUsuario.save();
          return savedUsuario;
        } catch (err) {
          console.error(err);
          throw new Error("Error in createUsuario Service");
        }
      }*/

}
module.exports = new UsuariosService();