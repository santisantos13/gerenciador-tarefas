export function formatarPrazo(prazo) {
  if (!prazo) {
    return"indefinido";
  }

  const [ano, mes, dia] = prazo.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function gerarId(){
  return crypto.randomUUID();
}