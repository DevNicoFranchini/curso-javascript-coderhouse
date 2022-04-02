//Carrito de compras

//Iniciar Sesión
function iniciarSesion() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let mail = prompt("Ingrese su correo electrónico");
  let celular = prompt("Ingrese su celular");

  alert(
    `¡Hola ${nombre}!\nSus datos son:\nNombre: ${nombre} ${apellido}.\nCorreo electrónico: ${mail}.\nCelular: ${celular}`
  );
}
iniciarSesion();

//Seleccionar productos

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const torta = new Producto("Torta", 100);
const budin = new Producto("Budin", 50);
const galleta = new Producto("Galleta", 25);

function pedido() {
  let carrito = prompt(
    "Agregue su pedido al carrito:\nIngrese el número correspondiente a su orden.\n1. Torta\n2.Budin\n3. Galleta\nIngrese FIN para salir."
  );
}
