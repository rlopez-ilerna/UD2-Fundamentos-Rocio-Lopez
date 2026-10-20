"use strict";

// Primera parte
    // Pedir dos números por prompt
let n1 = prompt("Introduce el primer número:");
let n2 = prompt("Introduce el segundo número:");

    // Sumar sin convertir valores
let suma = n1 + n2;

    // Sumar convirtiendo valores
let sumaConvertida = parseInt(n1) + parseInt(n2); 

    // Mostrar sumas
document.write("La suma sin convertir es: " + suma + "<br>");
document.write("La suma convertida es: " + sumaConvertida);


// Segunda parte
    // Valores que vamos a convertir.
const valores = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];

    // Crear la tabla HTML 
document.write("<h2>Conversión de tipos</h2>");
document.write("<table border='1'>");

    // Crear la cabecera.
document.write("<tr>");
document.write("<th>Valor original</th>");
document.write("<th>Number()</th>");
document.write("<th>String()</th>");
document.write("<th>Boolean()</th>");
document.write("</tr>");

    // Recorrer los valores y mostrar sus conversiones.
valores.forEach(function(valor) {
    document.write("<tr>");
    document.write("<td>" + String(valor) + "</td>");
    document.write("<td>" + Number(valor) + "</td>");
    document.write("<td>" + String(valor) + "</td>");
    document.write("<td>" + Boolean(valor) + "</td>");
    document.write("</tr>");
});

    // Cerrar la tabla.
document.write("</table>");
