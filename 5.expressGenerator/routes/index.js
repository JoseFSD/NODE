var express = require('express');
var router = express.Router();

//localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index');
});

//RUTA --> endPoint (una ruta es un endPoint, con el método que sea, get, post...)

//localhost:3000/postman
router.get('/postman',(req, res)=>{
  res.render('ejemplo'); //muestra una renderización, una vista
})

module.exports = router;
