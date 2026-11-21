import { formatarPrazo } from "./utils.js";

const rotuloPrioridade = {
  alta: "ALTA",
  media: "MÉDIA",
  baixa: "BAIXA",
};

export function criarCardTarefa(tarefa){

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

  return card;
}