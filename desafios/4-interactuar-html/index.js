let lista = document.getElementById("tareas");

const tareas = [];

for (let i = 0; i < 5; i++) {
  let word = prompt("Agregar 5 tareas");
  tareas.push(word);
}

for (const tarea of tareas) {
  let li = document.createElement("li");
  li.innerHTML = tarea;
  lista.appendChild(li);
}
