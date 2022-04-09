/* let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo");

console.log(div.innerText);
console.log(div); */

/* let perritos = document.getElementsByClassName("paises");

for (const perrito of perritos) {
  console.log(perritos);
} */

/* let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML); */

/* let h1 = document.getElementById("identificador");

h1.innerHTML = "<h2>hola<p>a todos</p></h2>"; */

/* setTimeout(() => {
  h1.innerText = "Hola mundo!";
}, 2000); */

/*
1. Creamos el nodo
2. Insertamos la info en el nodo
3. Añadir un padre
*/

/* let nombre = "andres";
let parrafo = document.createElement("p"); //Crea etiqueta
parrafo.innerHTML = `<h2>Hola ${nombre}</h2>`; //Crea contenido
document.body.append(parrafo); //Append para añadir
parrafo.className = "saludo";

let parrafo1 = document.getElementsByClassName("saludo");
parrafo1[0].remove; */

//parrafo.remove(); //Eliminar

/* document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = 39;

let input = document.getElementById("nombre");
console.log(input.value); */

/* let padre = document.getElementById("padre");
let personas = ["Homero", "Marge", "Bart"];

for (const persona of personas) {
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.append(li);
} */

/* const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

for (const producto of productos) {
  let contenedor = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}
 */

// EVENTOS

// Primera forma
/* let btn = document.getElementById("btn");
btn.addEventListener("click", respuesta);

function respuesta() {
  alert("Producto agregado");
} */

// Segunda forma
/* let boton = document.getElementById("btn");
btn.addEventListener("click", respuesta);

function respuesta() {
    setTimeout(() => {
        let h1 = document.createElement("h1");
        h1.innerHTML = "Bienvenido: ";

    })
}
 */

/* let boton = document.getElementById("eventos");
boton.addEventListener("mousedown", () => {
  console.log("evento mousedown");
}); */

boton.addEventListener("mousemove", () => {
  console.log("Evento mousemove");
});
