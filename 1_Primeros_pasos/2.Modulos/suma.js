function suma(a, b){
    return a + b;
}

function sumar4Numeros (a, b, c, d){
    return a + b + c + d;
}

// Para poder utilizar la funcion suma en otro archivo, tengo que EXPORTARLA
//exports.suma = suma; // "exports.suma", este primer suma es el nombre que le quiero dar al nombre de la exportacion, el segundo "= suma" será el nombre de la función que quiero exportar

// Exporto todas las funciones
module.exports = {
    suma,
    sumar4Numeros
}
