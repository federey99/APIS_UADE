const express = require('express');
const {check} = require("express-validator");
const router = express.Router();
const checkFields = require("../middlewares/validateFields");
const contactosController = require('../controllers/contactos.controller');
const jwtValidator = require('../middlewares/jwtValidator');



router.get('/',
[
    //check('jwt').not().isEmpty(),
    checkFields
],contactosController.getContactos);//GET CONTACTOS

router.get('/:id',[
    //check('jwt').not().isEmpty(),
    checkFields
],contactosController.getContactosByID);//GET CONTACTOS BY ID

router.post('/',[ // POST CONTACTOS
    //check('jwt').not().isEmpty(), 
    check('nombre').not().isEmpty(),
    check('apellido').not().isEmpty(),
    check('email').not().isEmpty(),
    check('telefono').not().isEmpty(),
    check('mensaje').not().isEmpty(),
    checkFields
],contactosController.createContacto); 

module.exports = router;
