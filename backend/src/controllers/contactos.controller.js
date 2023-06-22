
const ContactosService = require("../services/contactos.service");


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
            });
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

    async createContacto(req,res){
        try{
            let newContact = await ContactosService.createContact(req.body);

            return res.status(201).json({
                message:"Posted!",
                contacto:newContact,
            });
        }catch (err){
            console.error(err);
            return res.status(500).json({
                method:"createContacto",
                messege: err.message,
            })
        }
    }

}

module.exports = new ContactosController();