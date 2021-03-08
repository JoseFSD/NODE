const express = require('express')
//Utiliza de la librería express el método Router y lo instancia
//Nos permite crear rutas para poder exportarlas en un documento
const router = express.Router()

//localhost:3000/
router.get('/', (req, res) => {
    res.send('Hola Mundo!!!!!')
})




//Exporto todas las rutas que vaya a crear en este documento
module.exports = router;