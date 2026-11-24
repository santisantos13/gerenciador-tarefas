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
  const mesAtual = String(hoje.getMonth() + 1).padStart(2, "0");
  const diaAtual = String(hoje.getDate()).padStart(2, "0");

  return `${anoAtual}-${mesAtual}-${diaAtual}`;
}

export function estaVencida(prazo) {
  if (!prazo) {
    return false;
  }
  return prazo < dataDeHoje();
}