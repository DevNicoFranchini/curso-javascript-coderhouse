// Algoritmo para ver precio de cada sector de un recital

let valorEntrada = prompt(
  "Ingrese uno de los siguientes sectores: Campo; Platea; Palco. Ingrese FIN para salir."
);

while (valorEntrada != "FIN") {
  switch (valorEntrada) {
    case "Campo":
      alert("Su valor es $1.000");
      break;
    case "Platea":
      alert("Su valor es $2.000");
      break;
    case "Palco":
      alert("Su valor es $3.000");
      break;
    default:
      alert("Sector incorrecto");
      break;
  }

  valorEntrada = prompt(
    "Ingrese uno de los siguientes sectores: Campo; Platea; Palco. Ingrese FIN para salir."
  );
}
