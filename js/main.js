import { tarefas, adicionarTarefa, moverTarefa, editarTarefa, buscarTarefa, removerTarefa } from "./state.js";
import { renderizar } from "./render.js";
import { gerarId } from "./utils.js";
import { salvarTarefas } from "./storage.js";

let idEmEdicao = null;
const tituloModal = document.getElementById("modal-titulo");
const botaoSalvar = document.getElementById("botao-salvar")

renderizar(tarefas);

const campoBusca = document.getElementById("campo-busca");
campoBusca.addEventListener("input", () => {
  console.log(campoBusca.value);
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

const botaoNovaTarefa = document.getElementById("botao-nova-tarefa");
botaoNovaTarefa.addEventListener("click", () => {
  idEmEdicao = null;
  formTarefa.reset();
  tituloModal.textContent = "Criar tarefa";
  botaoSalvar.textContent = "✓ Cadastrar";
  modal.showModal();
});

const formTarefa = document.getElementById("form-tarefa");
formTarefa.addEventListener("submit", (criarTarefa) => {
  criarTarefa.preventDefault();

  const tarefaTitulo = document.getElementById("tarefa-titulo").value;
  const prioridade = document.getElementById("prioridade").value;
  const prazo = document.getElementById("prazo").value;

  if (idEmEdicao === null) {

    const novaTarefa = {
      id: gerarId(),
      titulo: tarefaTitulo,
      prioridade: prioridade,
      prazo: prazo,
      status: "a-definir",
    };
    adicionarTarefa(novaTarefa);
  } else {
    editarTarefa(idEmEdicao, tarefaTitulo, prioridade, prazo);
  }

  salvarTarefas(tarefas);
  renderizar(tarefas);
  formTarefa.reset();
  idEmEdicao = null;
  modal.close();
});

const areaColunas = document.querySelector("main");
areaColunas.addEventListener("click", (evento) => {
  const botaoRemover = evento.target.closest(".botao-remover-tarefa");

  if (!botaoRemover) {
    return;
  }

  const id = botaoRemover.dataset.id;
  removerTarefa(id);
  salvarTarefas(tarefas);
  renderizar(tarefas);
  console.log("deu certo")
});

areaColunas.addEventListener("change", (evento) => {
  const seletor = evento.target.closest(".seletor-status");

  if (!seletor) {
    return;
  }

  const id = seletor.dataset.id;
  const novoStatus = seletor.value;

  moverTarefa(id, novoStatus);
  console.log("gg")
  salvarTarefas(tarefas);
  renderizar(tarefas);
})

areaColunas.addEventListener("click", (evento) => {
  const botaoEditar = evento.target.closest(".botao-editar-tarefa");


  if (!botaoEditar) {
    return;
  }

  const tarefa = buscarTarefa(botaoEditar.dataset.id);
  document.getElementById("tarefa-titulo").value = tarefa.titulo;
  document.getElementById("prioridade").value = tarefa.prioridade;
  document.getElementById("prazo").value = tarefa.prazo;

  idEmEdicao = tarefa.id;
  tituloModal.textContent = "Editar tarefa";
  botaoSalvar.textContent = "✓ Salvar alterações";
  modal.showModal();
});

