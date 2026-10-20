"use strict";

// Declara variables de los tipos básicos de JavaScript.
const numero = 25;
const numeroGrande = 12345678901234567890n;
const texto = "Hola, JavaScript";
const esEstudiante = true;
const valorNulo = null;
let valorIndefinido;
const simbolo = Symbol("id");
const objeto = { nombre: "Rocío", curso: "2.º DAW" };

// Guarda las variables en una lista para mostrarlas en pantalla.
const tiposDatos = [
    ["number", numero],
    ["bigint", numeroGrande],
    ["string", texto],
    ["boolean", esEstudiante],
    ["null", valorNulo],
    ["undefined", valorIndefinido],
    ["symbol", simbolo],
    ["object", objeto]
];

// Selecciona la lista del HTML.
const listaTipos = document.getElementById("listaTipos");

// Muestra el nombre, el valor y el resultado de typeof de cada variable.
tiposDatos.forEach(function (dato) {
    const elemento = document.createElement("li");
    elemento.textContent = dato[0] + ": valor = " + String(dato[1]) + " | typeof = " + typeof dato[1];
    listaTipos.appendChild(elemento);
});

/* typeof null devuelve "object" por un error que viene de las primeras versiones de JavaScript.
 Aunque null significa que no hay ningún valor, JavaScript lo reconoce como un objeto por compatibilidad con versiones antiguas. */