/*
Storage: permite guardar información liviana. Ej: mantener info para iniciar sesión.
Se almacena en el navegador de forma indefinida.
*/

/*
Local storage: Solo guarda y devuelve strings.
*/

// console.log(localStorage); // No se reconoce desde el editor.

// Set Item: para guardar datos.
/* localStorage.setItem("nombre", "vanesa"); // No es un objeto.
localStorage.setItem("edad", "15"); */

// Get Item: para recuperar datos.
/* let nombre = localStorage.getItem("nombre");
let edad = parseInt(localStorage.getItem("edad")); // Para que sea number y no string.

console.log(nombre);
console.log(typeof edad); */

/*
Session storage: almacena información hasta que se cierra la pestaña.
*/

// sessionStorage.setItem("apellido", "franchini");

// JSON:

//JSON.stringify sirve para hacer string un dato

/* localStorage.setItem("arreglo", JSON.stringify([1, 2, 3]));

let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo)); */

/* localStorage.setItem("objeto", {nombre,}) */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
//Almacenar producto por producto
for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos)); */

/* let usuario = localStorage.getItem("usuario");

if (!usuario == true) {
  usuario = prompt("Por favor ingrese su nombre");
  localStorage.setItem("usuario", usuario);
} else {
  alert("bienvenido nuevamente");
} */


