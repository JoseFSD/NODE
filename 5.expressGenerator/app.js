//http-errors control de errores, esta libreria se mete en una variable que si da un error nos muestra la variable que es el tipo de error
var createError = require('http-errors');

var express = require('express');
var path = require('path');
//control de cookies
var cookieParser = require('cookie-parser');
//registra las solicitudes de http, nos dice el tipo de solicitud (get, post, use...), se registran todas las solicitudes que se le realicen al servidor
var logger = require('morgan');

//nos importa por defecto dos archivos de rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

//instancia la variable app de express
var app = express();

/////////////////////////////////////////////////////////////////////////////////////

// view engine setup
//rutas estáticas a las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//muestra las peticiones http
app.use(logger('dev'));
//esto es el equivcalente al body.parser, para poder recoger datos de un formulario y ver todo tipos de datos, sin body.parser, con express, ya que express tiene body.parser integrado, así que no hace falta instalarlo porque express ya lo tiene
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());

//ruta estática a la carpeta public, que es donde vamos a tener los archivos CSS, imagenes, etc.
app.use(express.static(path.join(__dirname, 'public')));

//utiliza las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
//localhost:3000/admin
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
