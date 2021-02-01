// METODOS DE ARRAYS: EJERCICIOS

// MAP

// EJERCICIO 1 😀
// Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo
// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez;

// codear acá la solución del ejercicio
console.log("EJERCICIO 1 👻");

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez = numeros.map((elemento) => {
  if (elemento) {
    return elemento + 10;
  }
});

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

// EJERCICIO 2 😀

// Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo
// const numeros = [3, 7, 13, 99];

// codear acá la solución del ejercicio
console.log("EJERCICIO 2 👻");

const numeros2 = [3, 7, 13, 99];

let dobles = numeros.map((elemento) => {
  if (elemento) {
    return elemento * 2;
  }
});

console.log(numeros2); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]

// EJERCICIO 3 😀

// Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// Mostrar por consola el array original y el nuevo
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// codear acá la solución del ejercicio

console.log("EJERCICIO 3 👻");

const frases = [
  "Todo lo que brilla no es oro.",
  "A caballo regalado no se le miran los dientes.",
  "Mas vale pajaro en mano que cien volando.",
];

let frasesExclamadas = frases.map((elemento) => {
  if (elemento) {
    return `${"¡"}` + elemento + `${"!"}`;
  }
});

console.log(frases); // ['Todo lo que brilla no es oro.', 'A caballo regalado no se le miran los dientes.', 'Mas vale pajaro en mano que cien volando.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

// EJERCICIO 4
// Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>

console.log("EJERCICIO 4 👻");

const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// codear acá la solución del ejercicio

listaDeLibros = librosDeJS.map((elemento) => {
  return `<li>${elemento}</li>`;
});

console.log(`<ul>${listaDeLibros}</ul>`);
//const lista = `<ul>${listaDeLibros}</ul>`;

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

// EJERCICIO 5 😀

// Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array que contenga la longitud de cada palabra.
// Mostrar por consola el array original y el nuevo.
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// codear acá la solución del ejercicio

console.log("EJERCICIO 5 👻");

const frases2 = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

let longitudes = frases2.map((elemento) => {
  return elemento.length;
});

console.log(frases2); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]

// EJERCICIO 6 😀

// Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

/// completá acá el código
console.log("EJERCICIO 6 👻");

const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

let playlistPosicion = playlist.map((elemento, indice) => {
  return indice + `${"-"}` + elemento;
});

console.log(playlistPosicion);
// console.log(playlist);

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

// EJERCICIO 7 😀

// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)

console.log("EJERCICIO 7 👻");

const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};
// console.log(agregarIVA());

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

const preciosFinales = costos.map((elemento) => {
  // const precioConGanancia = sumarGanancia(elemento);
  // const precioConGananciaEIVA = agregarIVA(precioConGanancia);
  // return precioConGananciaEIVA;

  return agregarIVA(sumarGanancia(elemento));
});

console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

// EJERCICIO 8 😀

// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// También tenemos un array en una variable productos con los nombres de cada producto.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
// El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos

console.log("EJERCICIO 8 👻");

const productos = ["celular", "notebook", "monitor"];
const costos2 = [12.5, 56, 98];

const agregarIVA2 = function (costo) {
  return costo * 1.21;
};

const sumarGanancia2 = function (costo) {
  return costo * 1.5;
};

// codear acá la solución del ejercicio

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]
