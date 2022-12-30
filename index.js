const express = require('express');
require('dotenv').config();

//Crear el servidor express
const app = express();

//Directorio publico
app.use(express.static('public'))

//Rutas
// app.get('/', (req, res) => {
//   res.json({
//     "ok": true
//   })
// })

//Escuchar peticiones
app.listen(4000, () => {

})