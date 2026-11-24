const CHAVE_TAREFAS = "lembrei:tarefas";

export function salvarTarefas(tarefas) {
  const texto = JSON.stringify(tarefas);
  localStorage.setItem(CHAVE_TAREFAS, texto)
}

export function carregarTarefas() {
  const texto = localStorage.getItem(CHAVE_TAREFAS);
  if (texto === null) {
    return null;
  }
  return JSON.parse(texto)
}