require('dotenv').config()
const express = require ('express');
const {dbConnection} = require('./src/db/config');
const cors = require('cors');

const app = express();
dbConnection();

app.use(cors());
app.use(express.urlencoded({extended: true })); //estas 2 lineas nos permiten parsear una request a un formato json.
app.use(express.json());

app.get('/',(req,res) => { //req es request, viene del lado del cliente a nuestro server. res es response, va de nuestro server al cliente (HTTP)
    res.status(200).send({message:'Welcome to the server!'});
});

app.use("/api/contactos",require("./src/routes/contactos.routes")); //Se especifica tanto la url de la coleccion de la bd como el router. Se debe especificar un router por cada modelo/coleccion de datos
app.use("/api/usuarios",require("./src/routes/usuarios.routes")); //Se especifica tanto la url de la coleccion de la bd como el router. Se debe especificar un router por cada modelo/coleccion de datos


app.listen(process.env.PORT, () => {
    console.log('Server running on port: '+process.env.PORT);
});


module.exports = app;