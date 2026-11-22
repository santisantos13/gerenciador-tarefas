export const tarefas = [
  { id: "1", titulo: "Estudar JavaScript", prioridade: "alta",  prazo: "2026-12-01", status: "a-definir" },
  { id: "2", titulo: "Estudar Python",     prioridade: "media", prazo: "2027-01-01", status: "a-definir" },
  { id: "3", titulo: "Vegetar",            prioridade: "baixa", prazo: "",           status: "a-definir" },
];

export function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}