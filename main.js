// alert("mensaje de alerta")

// defnir variables

var nombre = "Jairo";
var edad = 20;
var apellido = "Salas";

document.write(nombre + ' ' + edad);
document.write("<hr>");
document.write(apellido);

var datos = document.getElementById("datos");

datos.innerHTML = `
<h1>ttulo escrito desde js con innerHTML</h1>
<h2>continuación con un subtíyulos</h2>
<p>parrafo escrito desde js</p>
<h3>mi nombre es: ${nombre}</h3>
<h3>mi apellido es: ${apellido}</h3>
<h3>mi edad es: ${edad}</h3>
`;

if( edad >= 18){
    datos.innerHTML += `
    <h3>eres mayor de edad</h3>
    `;
}else{
    datos.innerHTML += `
    <h3>eres menor de edad</h3>
    `;
}
//operador += de asignación:no reemplaza sino añade.

//operador ternario
var mayor = (edad >= 18) ? "mayor de edad" : "menor de edad";
datos.innerHTML += `
<h3>eres ${mayor}</h3>
`;

//funciones
function mostrarNombre(nombre, apellido){
    var texto = `
    <h3>mi nombre es: ${nombre}</h3>
    <h3>mi apellido es: ${apellido}</h3>
    `;
    return texto;
}

function mostrarEdad(edad){
    var texto = `
    <h3>mi edad es: ${edad}</h3>
    `;
    return texto;
}

function imprimir(){
    var funciones = document.getElementById("funciones");
    funciones.innerHTML += mostrarNombre(nombre, apellido);
    funciones.innerHTML += mostrarEdad(edad);
}

imprimir();
mostrarEdad();

//bucles
var numeros = 10;
for(var i = 0; i <= numeros; i++){
    document.write(i + "<br>");
}

var year = 2018;
while(year <= 2022){
    document.write(year + "<br>");
    year++;
}

for(var i = 2020; i<= 2023; i++){
    fecha.innerHTML += ("Estamos en el año: " + i + "<br>");
}

//arrays
var nombres = ["Jairo", "Juan", "Pedro", "Luis"];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

document.write(nombres[0] + "<br>");
document.write(lenguajes[2] + "<br>");

for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br>");
}

//forEach
nombres.forEach((elemento, indice, array) => {
    document.write(indice + " " + elemento + "<br>");
}
);

function showData(nombre, apellido, edad, lenguaje){
    var data = document.getElementById("datos");
    datos.innerHTML += `
    <hr>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
    <h3>Mi edad es: ${edad}</h3>
    <h3>Mi lenguaje es: ${lenguaje}</h3>
    <hr>
    `;
    return data;
}

showData("Jairo", "Salas", 20, "JS");

function muestraMisCredenciales(valor1, valor2){
    var datos = document.getElementById("credenciales");
        datos.innerHTML += `
            <h3>Mi nombre es: ${valor1}</h3>
            <h3>Mi apellido es: ${valor2}</h3>
        `;
}