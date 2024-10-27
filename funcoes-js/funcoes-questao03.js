function maiorEMenorValores(lista) {
  const maior = Math.max(...lista);
  const menor = Math.min(...lista);

  return {
    maior,
    menor,
  };
}

const numeros = [15, 28, 3, 74, 1, 92, 11, 42, 5, 33];
const resultado = maiorEMenorValores(numeros);
console.log(`Maior: ${resultado.maior}, Menor: ${resultado.menor}`);
