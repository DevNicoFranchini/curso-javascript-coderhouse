// Inicio

let nombreUsuario = document.getElementById("nombre");

nombreUsuario.onblur = () => {
  let x = document.getElementById("nombre");
  x.value = x.value.toLowerCase();
  x.value = x.value[0].toUpperCase() + x.value.slice(1);
};

let apellidoUsuario = document.getElementById("apellido");

apellidoUsuario.onblur = () => {
  let x = document.getElementById("apellido");
  x.value = x.value.toLowerCase();
  x.value = x.value[0].toUpperCase() + x.value.slice(1);
};

let datos = document.getElementById("datos");
let miForm = document.getElementById("formulario");

miForm.addEventListener("submit", validarForm);
miForm.addEventListener("submit", delayChangePage);

function validarForm(e) {
  e.preventDefault();
  localStorage.setItem("nombreUsuario", nombreUsuario.value);
  //datos.innerHTML = `¡Bienvenido ${nombreUsuario.value}, que disfrute su compra! En breve será redirigido a la sección de compras.`;

  Swal.fire({
    position: "center",
    icon: "success",
    title: `¡Bienvenido ${nombreUsuario.value}, que disfrute su compra!
    En breve será redirigido a la sección de compras.`,
    showConfirmButton: false,
    timer: 3500,
    width: "50rem",
  });
  console.log(
    `El usuario ingresado fue ${nombreUsuario.value} ${apellidoUsuario.value}`
  );
}
