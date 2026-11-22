const CHAVE_TAREFAS = "lembrei:tarefas";

export function salvarTarefas(tarefas){
  const texto = JSON.stringify(tarefas);
  localStorage.setItem(CHAVE_TAREFAS, texto)
}
