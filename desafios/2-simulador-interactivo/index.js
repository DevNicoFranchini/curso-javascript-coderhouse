//Carrito de compras

//Iniciar Sesión
function iniciarSesion() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let mail = prompt("Ingrese su correo electrónico");
  let celular = prompt("Ingrese su celular");

  alert(
    `Sus datos son:\nNombre: ${nombre} ${apellido}.\nCorreo electrónico: ${mail}.\nCelular: ${celular}`
  );
}
iniciarSesion();

//Seleccionar productos

class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const torta = new Productos("Torta", 100);
const budin = new Productos("Budin", 50);
const galleta = new Productos("Galleta", 25);

function pedido() {
  let carrito = prompt(
    "Agregue su pedido al carrito:\n1. Torta - $100\n2.Budin - $50\n3. Galleta - $25\nIngrese FIN para salir."
  );

  while (carrito != "FIN") {
    switch (carrito) {
      case "Torta":
        alert("Su valor es $10");
        break;
      case "Budin":
        alert("Su valor es $50");
        break;
      case "Galleta":
        alert("Su valor es $25");
        break;
      default:
        alert("Pedido incorrecto");
        break;
    }

    carrito = prompt(
      "Agregue su pedido al carrito:\n1. Torta - $100\n2.Budin - $50\n3. Galleta - $25\nIngrese FIN para salir."
    );
  }
}
pedido();
