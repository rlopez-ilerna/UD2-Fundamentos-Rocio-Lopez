"use strict";

const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', });

// Obtenemos la fecha y el día actual
const fechaActual = new Date();
const diaActual = fechaActual.getDate();
const mesActual = fechaActual.getMonth() + 1; 
const anioActual = fechaActual.getFullYear();

// Obtenemos un día aleatorio entre 1 y 30
let diaAleatorio = Math.floor(Math.random() * 30) + 1;

// Comprobamos que el día aleatorio sea mayor o igual al día actual
while (diaAleatorio < diaActual) {
    diaAleatorio = Math.floor(Math.random() * 30) + 1;
}

// Creamos la fecha (con el mismo año y mes actual) del evento con el día aleatorio
const fechaAleatoria = new Date(anioActual, mesActual - 1, diaAleatorio);

// Calculamos los días que faltan para el evento
let diasFaltantes = diaAleatorio - diaActual;

// Mostramos el resultado utilizando Template Strings
document.write(`El fecha actual es ${formatoLargo.format(fechaActual)}.<br>`);
document.write(`La fecha del evento: ${formatoLargo.format(fechaAleatoria)}.<br>`);
document.write(`Días que faltan para el evento: ${diasFaltantes} días.<br>`);