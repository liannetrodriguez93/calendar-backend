const express = require('express');
require('dotenv').config();

//Crear el servidor express
const app = express();

//Directorio publico
app.use(express.static('public'))


//Rutas auth
app.use('/api/auth', require('./routes/auth'))

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("servidor corriendo en puesto: ", process.env.PORT)
})