const express = require('express');
const {check} = require("express-validator");
const router = express.Router();
const checkFields = require("../middlewares/validateFields");
const contactosController = require('../controllers/contactos.controller');

//const router = Router();

//router.get("/",jwtValidator,contactosController.getContactos);//GET CONTACTOS

//router.get("/:id",jwtValidator,contactosController.getContactosByID);//GET CONTACTOS BY ID

module.exports = router;