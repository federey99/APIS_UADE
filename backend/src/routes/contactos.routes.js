const express = require('express');
const {check} = require("express-validator");
const router = express.Router();
const checkFields = require("../middlewares/validateFields");
const contactosController = require('../controllers/contactos.controller');
const jwtValidator = require('../middlewares/jwtValidator');

//const router = Router();

router.get('/',
[
    check('jwt').not().isEmpty(),
    checkFields
],
jwtValidator,contactosController.getContactos);//GET CONTACTOS

router.get('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,contactosController.getContactosByID);//GET CONTACTOS BY ID

router.post('/',[ // POST CONTACTOS
    //check('jwt').not().isEmpty(),
    check('Nombre').not().isEmpty(),
    check('Apellido').not().isEmpty(),
    check('Domicilio').not().isEmpty(),
    check('Mail').not().isEmpty(),
    check('Mensaje').not().isEmpty(),
    checkFields
],jwtValidator,contactosController.createContacto);

module.exports = router;