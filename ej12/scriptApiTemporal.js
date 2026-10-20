"use strict";

const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', });

// Obtenemos la fecha y el día actual.
const fechaActual = Temporal.Now.plainDateISO();
const diaActual = fechaActual.day;
const mesActual = fechaActual.month;
const anioActual = fechaActual.year;

// Obtenemos un día aleatorio entre 1 y 30.
let diaAleatorio = Math.floor(Math.random() * 30) + 1;

// Comprobamos que el día aleatorio sea mayor o igual al día actual.
while (diaAleatorio < diaActual) {
    diaAleatorio = Math.floor(Math.random() * 30) + 1;
}

// Creamos la fecha del evento con el mismo año y mes actual.
const fechaAleatoria = Temporal.PlainDate.from({
    year: anioActual,
    month: mesActual,
    day: diaAleatorio
});

// Calculamos los días que faltan para el evento.
const diasFaltantes = fechaActual.until(fechaAleatoria).days;

// Convertimos las fechas Temporal a Date para poder usar Intl.DateTimeFormat.
const fechaActualDate = new Date(
    anioActual,
    mesActual - 1,
    diaActual
);

const fechaAleatoriaDate = new Date(
    anioActual,
    mesActual - 1,
    diaAleatorio
);

// Mostramos el resultado utilizando Template Strings.
document.write(`La fecha actual es ${formatoLargo.format(fechaActualDate)}.<br>`);
document.write(`La fecha del evento: ${formatoLargo.format(fechaAleatoriaDate)}.<br>`);
document.write(`Días que faltan para el evento: ${diasFaltantes} días.<br>`);
