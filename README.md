# Lembrei! 📝

**Lembrei!** é um gerenciador de tarefas estilo kanban, com cara de post-its coloridos. Organize o que precisa ser feito em três colunas, defina prioridade e prazo, e tudo fica salvo no seu navegador.

Feito com **HTML, CSS e JavaScript puro**, sem frameworks nem bibliotecas.

## Status do desenvolvimento

🚧 Em desenvolvimento

O Lembrei está sendo desenvolvido incrementalmente.
Novas funcionalidades e melhorias visuais estão sendo
implementadas conforme a evolução do projeto.

DEMO ONLINE:

🔗 **[Abrir o Lembrei!](https://santisantos13.github.io/gerenciador-tarefas/)**

## Funcionalidades

- [x] Criar tarefas por um modal (título, prioridade e prazo)
- [x] Excluir tarefas
- [x] Prioridade (baixa, média e alta) com badge colorido
- [x] Prazo opcional (aparece "indefinido" quando não é informado)
- [x] Três colunas: **A definir**, **Em andamento** e **Concluídas**
- [x] Tarefas salvas no navegador (continuam lá depois de recarregar a página)
- [x] Animações em CSS (hover nos cards, botões e logo)
- [x] Mover tarefas entre as colunas
- [x] Editar tarefas
- [x] Busca por nome
- [ ] Filtros por prioridade e status

## Tecnologias

- **HTML5**: estrutura semântica e o elemento nativo `<dialog>` para o modal
- **CSS3**: variáveis (custom properties), Grid, Flexbox, pseudo-elementos e transições
- **JavaScript**: módulos ES (`import`/`export`), manipulação do DOM, delegação de eventos e `localStorage`
- **Google Fonts**: Patrick Hand

## Como funciona por dentro

A ideia central do projeto é: **os dados mandam, a tela só reflete.**

1. As tarefas ficam em uma lista (`state.js`), que é a fonte da verdade
2. Toda ação (criar, excluir) altera essa lista, salva no `localStorage` e manda a tela se redesenhar
3. A função `renderizar()` esvazia as colunas e desenha cada tarefa na coluna certa, usando o campo `status` da tarefa

Cada tarefa é um objeto neste formato:

```js
{
  id: "3b9f1c2e-...",        // identificador único
  titulo: "Estudar JavaScript",
  prioridade: "alta",        // "baixa" | "media" | "alta"
  prazo: "2026-12-01",       // opcional (texto vazio quando não há prazo)
  status: "a-definir"        // "a-definir" | "em-andamento" | "concluida"
}
```

## Como rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/santisantos13/gerenciador-tarefas.git
   ```

2. Abra a pasta no VS Code
3. Instale a extensão **Live Server** e clique em **Go Live** (canto inferior direito)

> O projeto usa módulos JavaScript. Abrir o `index.html` direto no navegador (duplo clique) pode bloquear os módulos, por isso o uso do Live Server ou de qualquer outro servidor local.

## Estrutura do projeto

```text
gerenciador-tarefas/
├── index.html
├── README.md
├── assets/
│   └── icons/          # logo e ícones
├── css/
│   ├── reset.css       # zera os estilos padrão do navegador
│   ├── variable.css    # cores, espaçamentos e demais variáveis
│   ├── layout.css      # header, colunas e estrutura da página
│   ├── components.css  # cards, badges, botões, busca e modal
│   └── animations.css  # hovers e animações
└── js/
    ├── main.js         # liga tudo e escuta os eventos
    ├── state.js        # lista de tarefas e funções que a alteram
    ├── storage.js      # salvar e carregar (localStorage)
    ├── render.js       # desenha as tarefas na tela
    ├── filters.js      # busca e filtros
    └── utils.js        # funções pequenas e genéricas (id, formatação de data)
```

Cada arquivo tem uma responsabilidade só. Por exemplo, para trocar o `localStorage` por uma API no futuro, basta alterar o `storage.js`.

## Limitações atuais

- Os dados são armazenados localmente no navegador.
- Não existe sincronização entre dispositivos.
- Não há sistema de cadastro ou autenticação de usuários.
- Limpar os dados do navegador pode apagar as tarefas salvas.

## Próximos passos

- [ ] Mover tarefas entre colunas (e depois com arrastar e soltar)
- [ ] Editar tarefas reaproveitando o modal
- [ ] Busca por nome e filtros por prioridade e status
- [ ] Estado vazio nas colunas e destaque para prazos vencidos
- [ ] Tema escuro
- [ ] Versão responsiva para celular
- [ ] Novo layout com barra lateral e contadores nas colunas
- [ ] Backend com Python e banco de dados

## Autor

Feito por **Sant** · [GitHub](https://github.com/santisantos13) · [LinkedIn](https://www.linkedin.com/in/santsantos/)
