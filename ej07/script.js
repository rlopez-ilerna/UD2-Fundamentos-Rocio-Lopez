"use strict";

// 1. Da true porque 2 es mayor que 1.
console.log("2 > 1:", 2 > 1);

// 2. Da true porque el texto "2" se convierte en número al compararlo con 1.
console.log('"2" > 1:', "2" > 1);

// 3. Da true porque == convierte los valores a un tipo compatible y "01" se convierte en 1.
console.log('"01" == 1:', "01" == 1);

// 4. Da true porque == convierte false en 0 antes de comparar.
console.log("0 == false:", 0 == false);

// 5. Da true porque la cadena vacía se convierte en 0 y false también equivale a 0.
console.log('"" == false:', "" == false);

// 6. Da false porque === compara también el tipo: number y boolean son distintos.
console.log("0 === false:", 0 === false);

// 7. Da true porque == considera null y undefined iguales entre sí.
console.log("null == undefined:", null == undefined);

// 8. Da false porque === exige que el tipo y el valor sean iguales.
console.log("null === undefined:", null === undefined);

// 9. Da false porque null se convierte en NaN en esta comparación relacional,
// y las comparaciones con NaN no son verdaderas.
console.log("null > 0:", null > 0);

// 10. Da true porque en esta comparación null se convierte en 0,
// y 0 es mayor o igual que 0.
console.log("null >= 0:", null >= 0);

// 11. Da false porque undefined no se convierte en 0 en esta comparación
// de igualdad; undefined solo es igual con == a null o a sí mismo.
console.log("undefined == 0:", undefined == 0);

// 12. Da true porque las palabras se comparan letra por letra.
// Como la "G" y la "l" son iguales, comparamos la siguiente letra.
// "o" tiene un valor Unicode mayor que "e", por eso el resultado es true.
console.log('"Glow" > "Glee":', "Glow" > "Glee");
