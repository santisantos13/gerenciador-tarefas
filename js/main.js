import { tarefas } from "./state.js";
import { renderizar } from "./render.js";

renderizar(tarefas);

const campoBusca = document.getElementById("campo-busca");
campoBusca.addEventListener("input", () => {
  console.log(campoBusca.value);
})

const botaoNovaTarefa = document.getElementById("botao-nova-tarefa");
botaoNovaTarefa.addEventListener("click", () => {
  modal.showModal(); 
});

const formTarefa = document.getElementById("form-tarefa");
formTarefa.addEventListener("submit", (criarTarefa) => {
  criarTarefa.preventDefault();
  const tarefaTitulo = document.getElementById("tarefa-titulo").value;
  const prioridade = document.getElementById("prioridade").value;
  const prazo = document.getElementById("prazo").value;
  console.log("criar tarefa deu certo, uhuuuu");
  modal.close();
})

const botaoCancelar = document.getElementById("botao-cancelar");

botaoCancelar.addEventListener("click", () => {
  modal.close(); 
});

const botaoFechar = document.getElementById("botao-fechar");
const modal = document.getElementById("modal-tarefa");

botaoFechar.addEventListener("click", () => {
  modal.close();
});



