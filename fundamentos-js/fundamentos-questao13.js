function somaCubos(arr) {
    return arr.reduce((soma, num) => soma + Math.pow(num, 3), 0);
  }
  
  const numeros = [1, 2, 3];
  console.log(`A soma dos cubos é: ${somaCubos(numeros)}`);
  