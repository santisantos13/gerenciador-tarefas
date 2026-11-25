import { tarefas, adicionarTarefa, moverTarefa, editarTarefa, buscarTarefa, removerTarefa } from "./state.js";
import { renderizar, animarProximoCard } from "./render.js";
import { gerarId, estaVencida, dataDeHoje } from "./utils.js";
import { salvarTarefas } from "./storage.js";
import { filtrarPorTitulo, filtrarPorPrioridade } from "./filters.js";

let idEmEdicao = null;
const tituloModal = document.getElementById("modal-titulo");
const botaoSalvar = document.getElementById("botao-salvar");
const campoBusca = document.getElementById("campo-busca");
const filtroPrioridade = document.getElementById("filtro-prioridade");
const campoTitulo = document.getElementById("tarefa-titulo");
const campoDescricao = document.getElementById("tarefa-descricao");
const contadorTitulo = document.getElementById("contador-titulo");
const contadorDescricao = document.getElementById("contador-descricao");

function atualizarContadores() {
  contadorTitulo.textContent = `${campoTitulo.value.length}/50`;
  contadorDescricao.textContent = `${campoDescricao.value.length}/200`;
}

campoTitulo.addEventListener("input", atualizarContadores);
campoDescricao.addEventListener("input", atualizarContadores);

function atualizarTela() {
  const encontrados = filtrarPorTitulo(tarefas, campoBusca.value);
  const filtradas = filtrarPorPrioridade(encontrados, filtroPrioridade.value);
  renderizar(filtradas);
};

atualizarTela();

filtroPrioridade.addEventListener("change", atualizarTela)
campoBusca.addEventListener("input", atualizarTela)

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
  atualizarContadores();
  tituloModal.textContent = "Criar tarefa";
  botaoSalvar.textContent = "✓ Cadastrar";
  modal.showModal();
});

const formTarefa = document.getElementById("form-tarefa");
formTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const titulo = campoTitulo.value.trim();
  const descricao = campoDescricao.value.trim();
  const cor = document.querySelector('input[name="cor"]:checked').value;
  const prioridade = document.getElementById("prioridade").value;
  const prazo = document.getElementById("prazo").value;

  if (!titulo) {
    campoTitulo.focus();
    return;
  }

  if (idEmEdicao === null) {
    const novaTarefa = {
      id: gerarId(),
      titulo,
      descricao,
      cor,
      prioridade,
      prazo,
      status: "a-definir",
    };
    adicionarTarefa(novaTarefa);
    animarProximoCard(novaTarefa.id, "card-novo");
  } else {
    editarTarefa(idEmEdicao, { titulo, descricao, cor, prioridade, prazo });
  }

  salvarTarefas(tarefas);
  atualizarTela();
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
  const card = botaoRemover.closest(".card-tarefa");

  function excluir() {
    removerTarefa(id);
    salvarTarefas(tarefas);
    atualizarTela();
  }
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduzirMovimento) {
    excluir();
    return;
  }

  card.classList.add("card-saindo");
  card.addEventListener("animationend", excluir, { once: true });
});

areaColunas.addEventListener("change", (evento) => {
  const seletor = evento.target.closest(".seletor-status");

  if (!seletor) {
    return;
  }

  const id = seletor.dataset.id;
  const novoStatus = seletor.value;

  moverTarefa(id, novoStatus);
  animarProximoCard(id, "card-movido");
  console.log("gg")
  salvarTarefas(tarefas);
  atualizarTela();
})

areaColunas.addEventListener("click", (evento) => {
  const botaoEditar = evento.target.closest(".botao-editar-tarefa");

  if (!botaoEditar) {
    return;
  }

  const tarefa = buscarTarefa(botaoEditar.dataset.id);

  campoTitulo.value = tarefa.titulo;
  campoDescricao.value = tarefa.descricao ?? "";
  document.querySelector(`input[name="cor"][value="${tarefa.cor ?? "amarelo"}"]`).checked = true;
  document.getElementById("prioridade").value = tarefa.prioridade;
  document.getElementById("prazo").value = tarefa.prazo;
  atualizarContadores();

  idEmEdicao = tarefa.id;
  tituloModal.textContent = "Editar tarefa";
  botaoSalvar.textContent = "✓ Salvar alterações";
  modal.showModal();
});



