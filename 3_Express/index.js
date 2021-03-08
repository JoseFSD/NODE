//Importamos la librería express
const express = require('express')
//Librería que ya viene instalada con NODE y que nos ofrece funcionalidad con la rutas
const path = require('path')
//Instanciamos bodyParser para poder recoger datos del formulario
var bodyParser = require('body-parser')
//Instanciamos express
const app = express()
//Indicamos el puerto que vamos a utilizar, no hace falta indicarle localhost o 127.0.0.1
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
    // parse application/json
app.use(bodyParser.json())


//Rutas y métodos de HTTP para que al ejecutarlos en el navegador funcione la aplicación
//utilizamos un método de http --> GET, solicita un recurso (web, objeto, json...)
//recibe 2 parámetros como mínimo: 
// 1- la ruta (localhost:3000/)
// 2- un callback (req, res)
app.get('/', (req, res) => {
  res.send('Mi primer servidor con express')
})

//localhost:3000/contacto
app.get('/contacto', (req, res) => {
    res.send('Página de contacto')
})

//localhost:3000/contacto/feature
app.get('/contacto/feature', (req, res) => {
    res.send('Todo ok')
})

//__dirname
app.get('/miHtml', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')) //join nos concatena la dirección del path donde se encuentran mis archivos y el + nos concatena lo que le indicamos dentro de las ' como texto
})

//localhost:3000/sobre-nosotros
app.get('/sobre-nosotros', (req, res) => {
    res.sendFile(path.join(__dirname + '/sobre-nosotros.html'))
})

//Crear rutas con parámetros DINÁMICOS
app.get('/dinamico/:casa/:color', (req, res) =>{

  //req => request --> recoge parametros de la url, e un formulario, navegador..
  //params recoge los parámetros de la URL
  console.log(req.params)
  let dinosaurio = req.params.dinosaurio;
  let color = req.params.color;
  console.log(dinosaurio + " " + color)

  //si no usamos una respuesta, la página se queda pensando
  res.send('ok')
})

//localhost:3000/mostrarFormulario
app.get('/mostrarFormulario', (req, res) => {
  res.sendFile(path.join(__dirname + '/formulario.html'))
})

//El método de http post lo utilizamos para enviar datos a través del cuerpo del mensaje
//(ninguna persona ve los datos que se envían)
//localhost:3000/enviarDatos
app.post('/enviarDatos', (req, res) => {

  console.log(req.body)
  let nombre = req.body.nombreForm;
  let email = req.body.emailForm;
  let password = req.body.passwordForm;

  res.send('ok')
})


//localhost:3000/mostrarFormulario2
app.get('/mostrarFormulario2', (req, res) => {
  res.sendFile(path.join(__dirname + '/formulario2.html'))
})

//El método de http post lo utilizamos para enviar datos a través del cuerpo del mensaje
//(ninguna persona ve los datos que se envían)
//localhost:3000/enviarFormulario2
app.post('/enviarFormulario2', (req, res) => {

  //mostramos los datos capturados
  console.log(req.body)

  //guardamos los datos en variables
  let email2 = req.body.emailForm2;
  let password2 = req.body.passwordForm2;
  let check = req.body.checkForm2;

  //mostramos los datos capturados con las variables
  console.log(email2 + " - " + password2 + " - " + check);

  //envía mensaje de que todo está correcto
  res.send('ok')
})



//De la constante app que es la instancia de express ejecutamos el método listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})