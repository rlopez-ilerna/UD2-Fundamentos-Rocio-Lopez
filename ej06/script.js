"use strict";

// Primera Parte: mini calculadora.

    // Pedimos dos números al usuario.
const n1 = Number(prompt("Introduce el primer número:"));
const n2 = Number(prompt("Introduce el segundo número:"));

    // Calculamos las operaciones aritméticas.
const suma = n1 + n2;
const resta = n1 - n2;
const multiplicacion = n1 * n2;
const division = n1 / n2;
const resto = n1 % n2;
const potencia = n1 ** n2;

    // Mostramos los resultados.
alert(
    `Suma: ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
Resto: ${resto}
Potencia: ${potencia}`
);


// Segunda Parte: incremento y decremento.

    // Creamos la variable counter.
let counter = 5;

    // El sufijo muestra primero el valor y después lo incrementa.
alert(counter++); // Muestra 5. Después, counter pasa a valer 6.

    // El prefijo incrementa primero y después muestra el valor.
alert(++counter); // Primero pasa a 7 y muestra 7.

    // El sufijo muestra primero el valor y después lo decrementa.
alert(counter--); // Muestra 7. Después, counter pasa a valer 6.

    // El prefijo decrementa primero y después muestra el valor.
alert(--counter); // Primero pasa a 5 y muestra 5.


// Tercera Parte: asignaciones compuestas.

    // Sumamos 3 a counter y guardamos el resultado.
counter += 3; // Equivale a counter = counter + 3.

    // Multiplicamos counter por 2 y guardamos el resultado.
counter *= 2; // Equivale a counter = counter * 2.

    // Mostramos el resultado final.
alert(`Valor final de counter: ${counter}`);