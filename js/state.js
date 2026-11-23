import { carregarTarefas } from "./storage.js";

const tarefasDeExemplo = [
  { id: "1", titulo: "Estudar JavaScript", prioridade: "alta", prazo: "2026-12-01", status: "a-definir" },
];

export const tarefas = carregarTarefas() ?? tarefasDeExemplo;

export function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}

export function removerTarefa(id) {
  const posicao = tarefas.findIndex((tarefa) => tarefa.id === id);

  if (posicao !== -1) {
    tarefas.splice(posicao, 1);
  }
}

export function moverTarefa(id, novoStatus) {
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (tarefa) {
    tarefa.status = novoStatus;
  }
}