"use strict";

// Pedimos los datos del usuario con prompt
const nombre = prompt("Introduce tu nombre:");
const apodo = prompt("Introduce tu apodo:");
const edad = Number(prompt("Introduce tu edad:"));

// 1. Mostramos el primer valor disponible entre nombre y apodo.
    // Si los dos están vacíos, mostramos "Anónimo".
const nombreMostrar = nombre || apodo || "Anónimo";

alert(`Nombre para mostrar: ${nombreMostrar}`);


// 2. Usamos && para comprobar si puede acceder.
    // Debe tener 18 años o más y haber escrito un nombre o un apodo.
const accesoPermitido = edad >= 18 && (nombre || apodo);

if (accesoPermitido) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}


// 3. Diferencia entre || y ?? usando una altura de 0.
const altura = 0;

const alturaOr = altura || 170;
const alturaNullish = altura ?? 170;

/* || utiliza el valor alternativo si el valor original es falsy.
 Como 0 es falsy, alturaOr vale 170. */

/* ?? solo utiliza el valor alternativo si el original es null o undefined.
 Como 0 no es null ni undefined, alturaNullish vale 0. */

alert(`Altura usando ||: ${alturaOr}`);
alert(`Altura usando ??: ${alturaNullish}`);


// 4. Usamos !! para convertir un valor en booleano.
const tieneApodo = !!apodo;

alert(`¿Ha escrito un apodo?: ${tieneApodo}`);
