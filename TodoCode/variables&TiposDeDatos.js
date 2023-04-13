// comentarios
// alertas
// variables
// operadores relacionales
// operadores aritméticos
// operadores lógicos
// estructuras selectivas
// estructuras repetitivas

variables:
    var
    let
    const

//tipos de datos:
    string
    number
    boolean
    array
    object
    function
    undefined
    // null


//hay 3 tipos de datos númericos
//int
//float
//double

//number y BigInt
// BigInt es para valores mayores o iguales a 9007199254740991

//string
// para caracteres alfanumericos

//boolean
// booleanos permiten dos valores
(true);
false;
1;
0;
// verdadero o falso

//array
var array = [1,2,3,4,5,6,7,8,9,10];
var array = new Array(1,2,3,4,5,6,7,8,9,10);

//object
var objeto = {
    nombre: "Jairo",
    apellido: "Gonzalez",
    edad: 30
}

//function
function nombreFuncion(){
    //codigo
}

//undefined
var variable;
console.log(variable);

//null
var variable = null;
console.log(variable);

//typeof
console.log(typeof variable);

//operadores aritméticos
//suma
var suma = 5 + 5;
//resta
var resta = 5 - 5;
//multiplicación
var multiplicacion = 5 * 5;
//división
var division = 5 / 5;
//módulo
var modulo = 5 % 5;
//incremento
var incremento = 5;
incremento++;
//decremento
var decremento = 5;
decremento--;

//operadores relacionales
//igualdad
var igualdad = 5 == 5;
//desigualdad
var desigualdad = 5 != 5;
//mayor que
var mayorQue = 5 > 5;
//menor que
var menorQue = 5 < 5;
//mayor o igual que
var mayorIgualQue = 5 >= 5;
//menor o igual que
var menorIgualQue = 5 <= 5;

//operadores lógicos
//and
var and = 5 == 5 && 5 == 5;
//or
var or = 5 == 5 || 5 == 5;
//not
var not = !(5 == 5);

//estructuras selectivas
//if
if(5 == 5){
    //codigo
}
//if else
if(5 == 5){
    //codigo
}else{
    //codigo
}
//if else if
if(5 == 5){
    //codigo
}else if(5 == 5){
    //codigo
}else{
    //codigo
}
//switch
switch(5){
    case 1:
        //codigo
        break;
    case 2:
        //codigo
        break;
    default:
        //codigo
        break;
}

//estructuras repetitivas
//for
for(var i = 0; i < 10; i++){
    //codigo
}
//while
var i = 0;
while(i < 10){
    //codigo
    i++;
}
//do while
var i = 0;
do{
    //codigo
    i++;
}
while(i < 10);

//arrays
var array = [1,2,3,4,5,6,7,8,9,10];
var array = new Array(1,2,3,4,5,6,7,8,9,10);

//forEach
array.forEach((elemento, indice, array) => {
    //codigo
})

//for in
for(var i in array){
    //codigo
}

//for of
for(var i of array){
    //codigo
}

//map
var array2 = array.map((elemento, indice, array) => {
    return elemento;
})

//filter
var array3 = array.filter((elemento, indice, array) => {
    return elemento;
})

//find
var array4 = array.find((elemento, indice, array) => {
    return elemento;
})

//findIndex
var array5 = array.findIndex((elemento, indice, array) => {
    return elemento;
})

//reduce
var array6 = array.reduce((elemento, indice, array) => {
    return elemento;
})

//sort
var array7 = array.sort((elemento, indice, array) => {
    return elemento;
})

//reverse
var array8 = array.reverse((elemento, indice, array) => {
    return elemento;
})

//splice
var array9 = array.splice((elemento, indice, array) => {
    return elemento;
})

//slice
var array10 = array.slice((elemento, indice, array) => {
    return elemento;
})

//push
var array11 = array.push((elemento, indice, array) => {
    return elemento;
})

//pop
var array12 = array.pop((elemento, indice, array) => {
    return elemento;
})

//shift
var array13 = array.shift((elemento, indice, array) => {
    return elemento;
})
