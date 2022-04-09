//Arrays

// Acceder a las posiciones del arreglo

/* const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1;
console.log(numeros[3]); // 4;

let resultado = numeros[1] + numeros[2];
console.log(resultado); // 5; */

/* const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
  alert(numeros[index]);
} */

// Push - Agregar un dato al final del array
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
nombres.push("Luis");
console.log(nombres.length);
console.log(nombres); */

// Unshift - Agregar un dato al inicio del array
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
nombres.unshift("Luis");
console.log(nombres.length);
console.log(nombres); */

// Pop - Eliminar el ultimo elemento del array
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
nombres.pop();
console.log(nombres.length);
console.log(nombres); */

// Shift - Eliminar el primer elemento del array
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
nombres.shift();
console.log(nombres.length);
console.log(nombres); */

// Splice - Eliminar elementos en cualquier posición. Funciona con 2 parámetros: 1°-indice 2°-cant de elementos a borrar
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
nombres.splice(1, 2);
console.log(nombres.length);
console.log(nombres); */

// Join - Unir elementos mediante un string
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres.length);
console.log(nombres);
console.log(nombres.join(","));
 */

// Concat - Combinar 2 arrays en 1

// Slice - Copiar una parte de un array dentro de uno nuevo. EL ARRAY ORIGINAL NO SE MODIFICA. Funciona con 2 parámetros: 1°-indice 2°-cant de elementos a copiar
/* const nombres = ["pepito", "maria", "agostina"];
console.log(nombres);
const nombres2 = nombres.slice(1, 2);
console.log(nombres2); */

// Indexof - Obtener posición de un elemento del array

// Includes - Saber si un elemento existe o no dentro de un array

// Reverse - Invierte el orden de los elementos de un array

// EJEMPLO CARGAR ARRAY
//Declaraciòn de array vacío y variable para determinar cantidad
/* const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do {
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); */

// EJEMPLO ELIMINAR ARRAY
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro')
 */

// For...Of - Recorrer un array ejecutando un bloque de código por cada elemento del objeto. Similar al "for" pero ahorrando código

// Filter
/* let personas = [
  { nombre: "andres", edad: 17 },
  { nombre: "camilo", edad: 12 },
  { nombre: "maria", edad: 19 },
];

console.log(personas.filter((x) => x.edad < 18));
console.log(personas); */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const buscado = productos.find((producto) => producto.id === 3);
console.log(buscado); //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some((producto) => producto.nombre === "Harina");
console.log(existe); // false

const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos);
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map((producto) => producto.nombre);
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”] */

//map, some, filter

/* let info = [
  { nombre: "cafe", precio: 1000, disponible: true },
  { nombre: "pan", precio: 800, disponible: false },
  { nombre: "leche", precio: 2000, disponible: true },
]; */

/* let result = info.filter((x) => x.nombre == "cafe");
let result1 = info.filter((x) => x.precio > 900);
let result3 = info.map((x) => x.nombre);

console.log(result);
console.log(result1);
console.log(result3); */

/* console.log(info.map((x) => x.nombre));
console.log(info.some((x) => x.precio > 3000)); */

/* let productosDisponibles = info.filter((x) => x.disponible === true);
console.log(productosDisponibles);
 */

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

/* let productoVirtuales = [
  new Producto(1, "computador", 100000),
  new Producto(2, "computador1", 1039309),
  new Producto(3, "computador2", 482791827),
];

console.log(productoVirtuales[0].nombre); */

let productoVirtuales = [];

for (let i = 0; i < 2; i++) {
  let id = prompt("Ingrese el id del producto");
  let nombre = prompt("Ingrese el nombre del producto");
  let precio = prompt("Ingrese el precio del producto");

  productoVirtuales.push(new Producto(id, nombre, precio));
}

function eliminarProducto(id) {
  let index = productoVirtuales.indexOf(
    productoVirtuales.find((x) => x.id === id)
  );

  productoVirtuales.splice(index, 1);
}

eliminarProducto(6);
