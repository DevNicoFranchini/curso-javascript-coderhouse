// Calcular cuotas de un pedido

// Bienvenida

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let celular = parseInt(prompt("Ingrese su número de celular"));
let contra = prompt("Ingrese su constraseña");

alert(
  `¡Hola ${nombre}! Le damos la bienvenida a Las Flores Pastelería. Vamos a verificar sus datos para poder realizar una compra segura...`
);

let user = "";
let pass = "";
let intentos = 3;

function login(nombre, contrasenia, intentos) {
  if (!(nombre === "" && contrasenia === "")) {
    while (intentos > 0 && (nombre !== user || contrasenia !== pass)) {
      user = prompt("Ingrese su nombre");
      pass = prompt("Ingrese su contraseña");

      if (user === nombre && pass === contrasenia) {
        alert(`¡Datos verificados ${user}! Disfrute su compra.`);
      } else {
        alert(
          `Nombre o contraseña incorrectos. Restan ${intentos--} intentos.`
        );
      }
    }
  }
}

login(nombre, contra, intentos);

let valor = parseInt(
  prompt(`${nombre}, ingrese un precio para calcularle su valor.`)
);

alert(`El valor ingresado es $${valor}`);

// Simulador de crédito

function simulador() {
  let cuotas = parseInt(
    prompt(
      `${nombre}, ingrese 1 para 3 cuotas sin interés, 2 para 6 cuotas con 15% de recargo o 3 para 12 cuotas con 30% de recargo.`
    )
  );

  if (cuotas === 1) {
    valor = valor / 3;
    alert(`El precio final es $${valor}`);
  } else if (cuotas === 2) {
    valor = (valor * 0.15) / 6;
    alert(`El precio final es $${valor}`);
  } else if (cuotas === 3) {
    valor = (valor * 0.3) / 12;
    alert(`El precio final es $${valor}`);
  } else {
    alert(`${nombre}, el número es incorrecto. Vuelva a intentar`);
  }
}

simulador();
alert(`Gracias por haber utilizado el simulador. Hasta la próxima ${nombre}`);
