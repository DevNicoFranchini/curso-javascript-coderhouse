// Creo objetos

class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

const torta = new Productos("Torta", 2500);
const budin = new Productos("Budin", 1000);
const pan = new Productos("Pan", 200);
const tarta = new Productos("Tarta", 500);
const galleta = new Productos("Galleta", 100);
const helado = new Productos("Helado", 50);

// Creo arrays

const productosActivos = [torta, budin, pan, tarta, galleta, helado];
const productosInactivos = [];

function cambiar(nombre) {
  nombre.vender();
  let index = productosActivos.indexOf(nombre);
  if (index != -1) {
    productosActivos.splice(index, 1);
    productosInactivos.push(nombre);
  } else {
    console.log("Producto inexistente");
  }
}

cambiar(torta);
cambiar(pan);

console.log(productosActivos);
console.log(productosInactivos);
