import { tarefas } from "./state.js";
import { renderizar } from "./render.js";

renderizar(tarefas);

const campoBusca = document.getElementById("campo-busca");
campoBusca.addEventListener("input", () => {
  console.log(campoBusca.value);
})

const botaoNovaTarefa = document.getElementById("botao-nova-tarefa");
const botaoCancelar = document.getElementById("botao-cancelar");
const modal = document.getElementById("modal-tarefa");

botaoNovaTarefa.addEventListener("click", () => {
  modal.showModal(); 
});

botaoCancelar.addEventListener("click", () => {
  modal.close(); 
});
