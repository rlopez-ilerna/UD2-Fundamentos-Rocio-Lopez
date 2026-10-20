"use strict";

// Pedimos el nombre, la ciudad y el año de nacimiento por prompt.
const nombre = prompt("¿Cómo te llamas?");
const ciudad = prompt("¿En qué ciudad vives?");
const anioNacimiento = prompt("¿En qué año naciste?");

// Comprobamos si el usuario ha pulsado Cancelar.
if (nombre === null || ciudad === null || anioNacimiento === null) {
    alert("Has cancelado la operación.");
} else {
    // Calculamos la edad aproximada.
    const anioActual = new Date().getFullYear();
    const edad = anioActual - Number(anioNacimiento);

    // Mostramos el mensaje usando backticks e interpolación.
    alert(`¡Bienvenido/a, ${nombre}! Vives en ${ciudad} y tienes aproximadamente ${edad} años.`);
}
