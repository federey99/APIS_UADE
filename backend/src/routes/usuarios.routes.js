const express = require('express');
const {check} = require("express-validator");
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const checkFields = require("../middlewares/validateFields");


router.get("/",usuariosController.getUsuarios);//GET usuarios
router.get("/:id",usuariosController.getUsuariosByID);//GET usuarios BY ID
router.post("/", usuariosController.createUsuario); // POST usuarios

router.post("/login",
    [
        check("email").not().isEmpty(),
        check("password").not().isEmpty(),
        checkFields,    
    ],
    usuariosController.login);


router.post('/register',
    [
        check("name").not().isEmpty(),
        check("lastname").not().isEmpty(),
        check("email").not().isEmpty(),
        check("password").not().isEmpty(),
        checkFields,
    ],
usuariosController.createUsuario
)

module.exports = router;