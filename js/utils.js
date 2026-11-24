export function formatarPrazo(prazo) {
  if (!prazo) {
    return "indefinido";
  }

  const [ano, mes, dia] = prazo.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function gerarId() {
  return crypto.randomUUID();
}

export function dataDeHoje() {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = String(hoje.getMonth()).padStart(1, "0");
  const dataAtual = hoje.getDate();

  return `${anoAtual}-${mesAtual}-${dataAtual}`;
}

export function estaVencida(prazo) {
  if (!prazo) {
    return false;
  }
  return prazo < dataDeHoje();
}