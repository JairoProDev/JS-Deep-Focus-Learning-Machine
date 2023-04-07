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