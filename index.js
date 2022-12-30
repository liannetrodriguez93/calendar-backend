const express = require('express');

//Crear el servidor express
const app = express();

//Rutas
app.get('/', (req, res) => {
  res.json({
    "ok": true
  })
})

//Escuchar peticiones
app.listen(4000, () => {

})