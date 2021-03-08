//CREAR UN SERVIDOR 

//Primero importamos (require) la librería de HTTP
const http = require('http');

//Host donde vamos a trabajar (en local)
const hostname = '127.0.0.1'; //también podemos poner 'localhost', es lo mismo que 127.0.0.1
//Puerto que vamos a utilizar
const port = 3000;

//Método createServer, crea un servidor web con las especificaciones que pongamos
const server = http.createServer(config);

//res = response (respuestas)
//req = request (peticiones)
function config(req, res){  
  res.statusCode = 200; //Devuelve un codigo de estado 200, que significa que todo está OK
  res.setHeader('Content-Type', 'text/plain'); //Tipo de respuesta que vamos a dar es texto plano(string)
  res.end('Hello Codehouser'); //Finaliza con la respuesta (string)
}

//Método listen, es el método que escucha el servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});