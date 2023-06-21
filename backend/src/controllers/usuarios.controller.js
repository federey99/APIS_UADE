require('dotenv').config();
const jwt = require("jsonwebtoken")
const UsuariosService = require("../services/usuarios.service");
const AuthService = require('../services/auth.service')


class UsuariosController{

    async getUsuarios(req,res){
        try{
            const users = await UsuariosService.getUsers();
            return res.status(200).json(users);
        }
        catch (err){
            console.error(err)
            return res.status(500).json({
                method: "getUsers",
                message: err,
            })
        }
    }

    async getUsuariosByID(req,res){
        try{
            const id = req.params.id;
            let user = await UsuariosService.getUserByID(id);
            if (!user){
                return res.status(404).json({
                    method: "getUserByID",
                    message: "Not Found"
                })
            }
            return res.status(200).json(user);
        }
        catch (err){
            console.error(err)
            return res.status(500).json({
                method: "getUsuariosByID",
                message: err,
            })
        }
    }

    async createUsuario(req,res){
        try{
            let newUser = await UsuariosService.createUser(req.body);

            return res.status(201).json({
                message:"Created!",
                usuario:newUser,
            });
        }catch (err){
            console.error(err);
            return res.status(500).json({
                method:"createUsuario",
                messege: err.message,
            })
        }
    }

    async login(req,res){
        try{
            const {email, password} = req.body;
            let isuserRegistred = await AuthService.hasValidCredentials(email,password);
            if (isuserRegistred){

                const user = await UsuariosService.getUserByEmail(email);
                const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY, {
                    expiresIn: "1d",
                });

                return res.status(200).json({
                    status:200,
                    token,
                    message: "Token created successfully."
                });
            }else{
                return res.status(401).json({
                    message: "Unauthorized3.",
                });
            }
        }catch (err){
            console.error(err)
        }
    }


    /*
    async createUsuario(req, res) {
    try {
      const {  name, lastname, email, password } = req.body; // Obtén los datos del cuerpo de la solicitud
      const newUser = await UsuariosService.createUser( name, lastname, email, password );
      //console.log(req.body)
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createUsuario",
        message: err.message,
      });
    }
  }*/

}

module.exports = new UsuariosController();