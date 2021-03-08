//Van a ir las rutas con los diferentes métodos de http
//y las distintas funcionalidades
const express = require('express');
const { route } = require('./indexRoute');
const router= express.Router()
const path = require('path')

//localhost:3000/admin/all
router.get('/all', (req, res) => {
    res.send('Jose, Manolo, Benito, Antonio')
})

//localhost:3000/admin/nombre/xxxx
router.get('/nombre/:nombreAdmin', (req, res) => {
    let nombreAdmin = req.params.nombreAdmin
    res.send('nombre del Administrador: ' + nombreAdmin)
})

//localhost:3000/admin/addAdmin
router.get('/addAdmin', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/index.html'))
})

//localhost:3000/admin/recogerDatos
//para poder realizar un post tienes que haber instalado previamente body-parser
router.post('/recogerDatos', (req, res) => {
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let edad = req.body.edad

    res.send(nombre + ' - ' + apellido + ' - ' + edad)
})

module.exports = router;