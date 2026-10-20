"use strict";

// Array bidimensional de canciones
const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
]

// Parte 1: push y pop
document.write("<h2>Parte 1: push y pop</h2>");

    // 1. Añadir al final del array dos canciones nuevas
playlist.push(["Stairway to Heaven", "Led Zeppelin", 482, "Rock"]);
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);

    // 2. Eliminar la última canción del array y guardarla en una variable
let cancionEliminada = playlist.pop();

    // 3. Añadir un quinto dato a la primera cancion (año)
playlist[0].push(1975);

    // 4. Mostar por pantalla la canción eliminada y la playlist actualizada
document.write("<b>Canción eliminada:</b> " + cancionEliminada[0] + "<br>");

document.write("<br> <b>Playlist:</b> <br>");
    for (let i = 0; i < playlist.length; i++) {
        document.write(playlist[i].join(", ") + "<br>");
    }

// Parte 2: splice
document.write("<hr><h2>Parte 2: splice</h2>");

    // 5. Añadir una canción en la posición 1 del array sin eliminar ninguna
playlist.splice(1, 0, ["Like a Rolling Stone", "Bob Dylan", 369, "Folk Rock"]);

    // 6. Eliminar la canción en la posición 2 del array y guardarla en una variable
    let cancionEliminada2 = playlist.splice(2, 1);

    // 7. Sustituir la canción en la posición 0 del array con una nueva canción
    playlist.splice(0, 1, ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);

    // 8. Mostrar por pantalla la canción eliminada y la playlist actualizada
    document.write("<b>Canción eliminada:</b> <br>");
        for (let i = 0; i < cancionEliminada2.length; i++) {
        document.write(cancionEliminada2[i].join(", ") + "<br>");
    }

    document.write("<br> <b>Playlist:</b> <br>");
    for (let i = 0; i < playlist.length; i++) {
        document.write(playlist[i].join(", ") + "<br>");
    }

// Parte 3: spread y copias
document.write("<hr><h2>Parte 3: spread y copias</h2>");

document.write("<u>Copia con spread</u><br>");

    // 9. Crear una copia de la playlist con spread
let copiaPlaylist = [...playlist];

        // Modificar el título de la primera canción de la copia
copiaPlaylist[0][0] = "Another One Bites the Dust";

        // Mostrar la copia y la playlist original
document.write("<b>Playlist original:</b> <br>");
for (let i = 0; i < playlist.length; i++) {
    document.write(playlist[i].join(", ") + "<br>");
}
document.write("<br> <b>Copia de la playlist:</b> <br>");   
for (let i = 0; i < copiaPlaylist.length; i++) {
    document.write(copiaPlaylist[i].join(", ") + "<br>");
}

// ¿Por qué la playlist original también cambia? 
/* He comprobado que al modificar la copia, también se modifica la original. 
 Esto ocurre porque el spread  crea una copia superficial del array, lo que significa que los elementos internos (en este caso, los arrays de canciones) 
 siguen siendo referencias a los mismos objetos en memoria. 
 Por lo tanto, al modificar un elemento interno de la copia, también se modifica el mismo elemento en la original. */


document.write("<br><u>Copia independiente con map</u>");

    // 10. Crear una copia independiente de la playlist con map
let copiaPlaylist2 = playlist.map(cancion => [...cancion]);

        // Modificar el título de la primera canción de la copia independiente
copiaPlaylist2[0][0] = "Livin' on a Prayer";

        // Mostrar la copia independiente y la playlist original
document.write("<br> <b>Playlist original:</b> <br>");
for (let i = 0; i < playlist.length; i++) {
    document.write(playlist[i].join(", ") + "<br>");
}
document.write("<br> <b>Copia independiente de la playlist:</b> <br>");
for (let i = 0; i < copiaPlaylist2.length; i++) {
    document.write(copiaPlaylist2[i].join(", ") + "<br>");
}

// ¿Por qué la playlist original no cambia también? 
/* He comprobado que al modificar la copia, no se modifica la original. Esto ocurre porque el método map crea una nueva matriz y, 
 al usar el spread operator dentro de la función de mapeo, se crean nuevas referencias para los elementos internos (los arrays de canciones). 
 Por lo tanto, al modificar un elemento interno de la copia, no afecta a la original. */




