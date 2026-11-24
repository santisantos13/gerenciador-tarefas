export function filtrarPorTitulo(tarefas, texto) {
  const busca = texto.trim().toLowerCase();

  return tarefas.filter((tarefa) => tarefa.titulo.toLowerCase().includes(busca))
}

export function filtrarPorPrioridade(tarefas, prioridade) {
  if (prioridade === "todas") {
    return tarefas;
  }
  return tarefas.filter((tarefa) => tarefa.prioridade === prioridade);
}