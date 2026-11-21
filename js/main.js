import { criarCardTarefa } from "./render.js";
import { tarefas } from "./state.js";
console.log(tarefas);

const campoBusca = document.getElementById("campo-busca");
campoBusca.addEventListener("input", () => {
  console.log(campoBusca.value);
})

const listaADefinir = document.querySelector("#coluna-a-definir .lista-tarefas");
listaADefinir.append(criarCardTarefa(tarefas[0]));
listaADefinir.append(criarCardTarefa(tarefas[1]));
listaADefinir.append(criarCardTarefa(tarefas[2]));