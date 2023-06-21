require('dotenv').config();
//const jwt = require("jsonwebtoken")
const ContactosService = require("../services/contactos.service");
//const AuthService = require('../services/auth.service')


class ContactosController{

    async getContactos(req,res){
        try{
            const contacts = await ContactosService.getContacts();
            return res.status(200).json(contacts);
        }
        catch (err){
            console.log(err)
            return res.status(500).json({
                method: "getContacts",
                message: err,
            })
        }
    }

    async getContactosByID(req,res){
        try{
            const id = req.params.id;
            let contact = await ContactosService.getContactByID(id);
            if (!contact){
                return res.status(404).json({
                    method: "geContactByID",
                    message: "Not Found"
                })
            }
        }
        catch (err){
            console.log(err)
            return res.status(500).json({
                method: "getContactosByID",
                message: err,
            })
        }
    }
}

module.exports = new ContactosController();