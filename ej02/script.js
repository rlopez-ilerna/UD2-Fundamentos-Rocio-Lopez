"use strict";

// Declara variables con mis datos personales.
let userName = "Rocío López Muñoz";
let age = 21;
let city = "Córdoba";

// Declara una constante para el color favorito y otra para la hora de carga.
const COLOR_FAVORITO = "#800080";
const loadTime = Date.now();

// Muestra los datos y las constantes mediante alertas.
alert("Nombre: " + userName);
alert("Edad: " + age);
alert("Ciudad: " + city);
alert("Color favorito: " + COLOR_FAVORITO);
alert("Hora de carga: " + loadTime);

// Si descomentamos la línea de abajo, intentaríamos reasignar una constante y se produciría un error.
// COLOR_FAVORITO = "#FF0000";
// Error: TypeError: Assignment to constant variable.