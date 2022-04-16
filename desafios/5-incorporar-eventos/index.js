let usuario = document.getElementById("usuario");

usuario.onblur = () => {
  var x = document.getElementById("usuario");
  x.value = x.value.toLowerCase();
};

let datos = document.getElementById("datos");
let miForm = document.getElementById("formulario");
miForm.addEventListener("submit", validarForm);

function validarForm(e) {
  e.preventDefault();
  datos.innerHTML = `¡Datos ingresados correctamente!
  Bienvenido ${usuario.value}`;
  console.log(`El usuario ingresado fue ${usuario.value}`);
}
