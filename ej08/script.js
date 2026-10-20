"use strict";

// Pedimos la nota con prompt
const dato = prompt("Introduce una nota entre 0 y 10:");

// Convertimos el dato a número.
const nota = Number(dato);

// Comprobamos si el dato es válido.
if (dato === null || dato.trim() === "" || !Number.isFinite(nota) || nota < 0 || nota > 10) {
    alert("Error: introduce un número entre 0 y 10.");
} else {
    // Comprobamos qué calificación corresponde a la nota.
    if (nota < 5) {
        alert("Suspenso");
    } else if (nota < 7) {
        alert("Aprobado");
    } else if (nota < 9) {
        alert("Notable");
    } else {
        alert("Sobresaliente");
    }

    // La comprobación original con if:
    // if (nota >= 5) {
    //     alert("Has aprobado");
    // } else {
    //     alert("Has suspendido");
    // }

    // La misma comprobación utilizando el operador ternario.
    const resultado = nota >= 5 ? "Has aprobado" : "Has suspendido";
    console.log(resultado);
}
