export function filtrarPorTitulo(tarefas, texto) {
  const busca = texto.trim().toLowerCase();

  return tarefas.filter((tarefa) => tarefa.titulo.toLowerCase().includes(busca))
}