//Un CALLBACKS es una función a la que se le pasa como parámetro otra función

//Función primera
function hagoAlgo(parametroCallback){
    console.log('1');
    parametroCallback();
    console.log('2');
}

hagoAlgo(
    function ejemplo(){
        console.log('Intermedio Codehouse');
    }
);

//Función segunda
function procesarSaludoMananero(parametroCallback){
    console.log('1');
    parametroCallback();
    console.log('4');
}

function saludoMananero(){
    console.log('2');
    console.log('Hola buenos días');
    console.log('3');
}

procesarSaludoMananero(saludoMananero);

//Función segunda pasando varias funciones como parámetros
function procesarSaludoMananero2(parametroCallback, desayuno, fin){
    console.log('1');
    parametroCallback();
    desayuno();
    console.log('4');
    fin();    
}

function saludoMananero2(){
    console.log('2');
    console.log('Hola buenos días');
    console.log('3');
}

function vamosADesayunar(){
    console.log('Voya desayunar un bocata de jamón');
}

function ultimoCallback(){
    console.log('Último callback');
}

procesarSaludoMananero2(saludoMananero2, vamosADesayunar, ultimoCallback);