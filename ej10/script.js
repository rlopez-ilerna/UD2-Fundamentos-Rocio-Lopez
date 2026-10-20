"use strict";

let opcion;

// El menú se repite hasta que el usuario elige salir.
do {
    opcion = prompt(
        "MENÚ PRINCIPAL\n\n" +
        "1 - Tabla de multiplicar\n" +
        "2 - Sumar números\n" +
        "3 - Mostrar números impares del 1 al 20\n" +
        "4 - Cuenta atrás\n" +
        "0 - Salir\n\n" +
        "Elige una opción:"
    );

    switch (opcion) {
        case "1": {
            // Usamos for para mostrar la tabla de multiplicar.
            const numero = Number(prompt("Introduce un número:"));
            let tabla = "";

            for (let i = 1; i <= 10; i++) {
                tabla += `${numero} x ${i} = ${numero * i}\n`;
            }

            alert(tabla);
            break;
        }

        case "2": {
            // Usamos while(true) para sumar hasta que el usuario
            // deje el campo vacío o cancele. break termina el bucle.
            let suma = 0;

            while (true) {
                const dato = prompt(
                    "Introduce un número para sumar.\n" +
                    "Deja el campo vacío o pulsa Cancelar para terminar."
                );

                if (dato === null || dato.trim() === "") {
                    break;
                }

                const numero = Number(dato);

                if (!Number.isFinite(numero)) {
                    alert("Introduce un número válido.");
                    continue;
                }

                suma += numero;
            }

            alert(`La suma total es: ${suma}`);
            break;
        }

        case "3": {
            // Usamos for y continue para saltarnos los números pares.
            let impares = "";

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                impares += `${i}\n`;
            }

            alert(`Números impares del 1 al 20:\n\n${impares}`);
            break;
        }

        case "4": {
            // Usamos do...while para hacer la cuenta atrás hasta 0.
            const dato = prompt("¿Desde qué número quieres hacer la cuenta atrás?");
            const numeroInicial = Number(dato);

            if (
                dato === null ||
                dato.trim() === "" ||
                !Number.isInteger(numeroInicial) ||
                numeroInicial < 0
            ) {
                alert("Introduce un número entero igual o mayor que 0.");
            } else {
                let numero = numeroInicial;
                let cuentaAtras = "";

                do {
                    cuentaAtras += `${numero}\n`;
                    numero--;
                } while (numero >= 0);

                alert(`Cuenta atrás:\n\n${cuentaAtras}`);
            }

            break;
        }

        case "0":
            alert("Has salido del programa.");
            break;

        default:
            // Mostramos un aviso si la opción no existe.
            alert("Opción no válida. Elige una opción del 0 al 4.");
    }

} while (opcion !== "0" && opcion !== null);