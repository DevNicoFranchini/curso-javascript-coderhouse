/* // Tabla de multiplicar

// Solicitamos un valor al usuario

let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
} */

/* // Asignar turnos

for (let i = 1; i <= 20; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
}
 */

/* //Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”

let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != "ESC") {
  alert("El usuario ingresó " + entrada);
  //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
  entrada = prompt("Ingresar otro dato");
} */

/* let prueba = 5;

if (prueba === 6) {
  console.log("bien");
} else {
  console.log("mal");
} */

/* let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  alert(nombre + " " + "puede ingresar al boliche.");
} else {
  alert(nombre + " " + "no puede ingresar al boliche.");
} */


