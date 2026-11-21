export function criarCardTarefa(tarefa){
  const card = document.createElement("article");
  card.classList.add("card-tarefa");

  const titulo = document.createElement("h3");
  titulo.textContent = tarefa.titulo;
  card.append(titulo);

  const badge = document.createElement("span");
  badge.classList.add("badge-prioridade");
  badge.dataset.prioridade = tarefa.prioridade;
  badge.textContent = tarefa.prioridade;
  card.append(badge);

  
  return card;
}