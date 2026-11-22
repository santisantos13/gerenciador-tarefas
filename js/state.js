import { carregarTarefas } from "./storage.js";

const tarefasDeExemplo = [
  { id: "1", titulo: "Estudar JavaScript", prioridade: "alta", prazo: "2026-12-01", status: "a-definir" },
];

export const tarefas = carregarTarefas() ?? tarefasDeExemplo;

export function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}
