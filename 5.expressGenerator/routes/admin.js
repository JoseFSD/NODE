const express = require('express') //requerimos libreria express
const router = express.Router() //requerimos método de la librería 
//express a través de la constante express que hemos declarado en la linea anterior

//localhost:3000/admin
router.get('/',(req, res) => {
    res.send('exta es la ruta de admin')
})














module.exports = router; //exportamos el módulo admin.js