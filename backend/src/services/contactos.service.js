const ContactosModel = require('../models/Contactos');

class ContactosService{

    async getContacts(){
        try{
            const contacts = await ContactosModel.find(); // se hace asincrona para esperar una respuesta de la BDD
            return contacts;
        }catch (err){
            console.log(err);
            throw new Error("Error in getContacts Service");
        }
    }

    async getContactsById(id){
        try{
            let contact = await ContactosModel.findOne({_id:id});
            return contact;
        }catch (err){
            console.log(err);
            throw new Error("Error in getContactsByID Service");
        }
    }

}
module.exports = new ContactosService();