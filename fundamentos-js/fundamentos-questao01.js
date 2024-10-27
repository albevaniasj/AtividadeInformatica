const dataAtual = new Date();
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

console.log(`Hoje é: ${diasDaSemana[dataAtual.getDay()]}.`);
console.log(`A hora atual é: ${dataAtual.toLocaleTimeString()}.`);
