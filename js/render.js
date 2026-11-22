import { formatarPrazo } from "./utils.js";

const rotuloPrioridade = {
  alta: "ALTA",
  media: "MÉDIA",
  baixa: "BAIXA",
};

export function criarCardTarefa(tarefa) {

  const card = document.createElement("article");
  card.classList.add("card-tarefa");

  const titulo = document.createElement("h3");
  titulo.textContent = tarefa.titulo;
  card.append(titulo);

  const badge = document.createElement("span");
  badge.classList.add("badge-prioridade");
  badge.dataset.prioridade = tarefa.prioridade;
  badge.textContent = rotuloPrioridade[tarefa.prioridade];
  card.append(badge);

  const prazo = document.createElement("p");
  prazo.classList.add("prazo");
  prazo.textContent = "Prazo: " + formatarPrazo(tarefa.prazo);
  card.append(prazo);

  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover-tarefa");
  botaoRemover.dataset.id = tarefa.id;
  botaoRemover.setAttribute("aria-label", "Excluir tarefa")
  botaoRemover.textContent = "✕";
  card.append(botaoRemover);

  return card;
}

export function renderizar(tarefas) {
  const listas = document.querySelectorAll(".lista-tarefas");

  for (const lista of listas) {
    lista.replaceChildren();
  }

  for (const tarefa of tarefas) {
    const lista = document.querySelector(`[data-status="${tarefa.status}"] .lista-tarefas`);
    const card = criarCardTarefa(tarefa);
    lista.append(card);
  }
}