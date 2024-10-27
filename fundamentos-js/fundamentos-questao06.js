function numeroMaisFrequente(arr) {
  let frequencia = {};
  let maxContagem = 0;
  let numeroMaisFrequente = null;

  arr.forEach((num) => {
    frequencia[num] = (frequencia[num] || 0) + 1;
    if (frequencia[num] > maxContagem) {
      maxContagem = frequencia[num];
      numeroMaisFrequente = num;
    }
  });

  return numeroMaisFrequente;
}

const numeros = [1, 2, 3, 2, 3, 2, 4, 5, 3];
console.log(`O número mais frequente é: ${numeroMaisFrequente(numeros)}`);
