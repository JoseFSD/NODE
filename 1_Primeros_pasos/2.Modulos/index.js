// INDEX.JS es el archivo principal 
// Vamos a requerir (llamar) a todos los demás archivos

// requiero/importo/llamo todo lo que tenga el archivo suma.js
const funcionSuma = require('./suma.js'); // lo meto en una constante porque no va a cambiar su valor
const funcionResta = require('./resta.js');


// utilizar la función de suma
console.log(funcionSuma.suma(4, 5)); // sumar.suma (el primer suma llama a la constante, con el . entramos en el archivo suma.js y con el segundo suma accedemos a la función suma de dentro del archivo suma.js)
console.log(funcionSuma.sumar4Numeros(4, 5, 6, 7));
console.log(funcionResta.restar(8, 5));