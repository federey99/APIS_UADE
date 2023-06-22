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

    async createContact(contact) {
        try {
          let savedContact = await ContactosModel.create(contact);
          return savedContact;
        
        } catch (err) {
          console.error(err);
          throw new Error("Error in createContact Service",err);
        }
      }

}
module.exports = new ContactosService();