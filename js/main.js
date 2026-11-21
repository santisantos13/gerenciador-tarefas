import { tarefas } from "./state.js";
console.log(tarefas);

const campoBusca = document.getElementById("campo-busca");
campoBusca.addEventListener("input", () => {
  console.log(campoBusca.value);
})

//const coluna = document.querySelector(`[data-status="${tarefa.status}"]`);