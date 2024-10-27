function somaTamanhosPalavras(frase) {
    return frase.split(" ").reduce((soma, palavra) => soma + palavra.length, 0);
  }
  
  const frase = "Calcular o total de caracteres de cada palavra";
  console.log(`Soma dos tamanhos das palavras: ${somaTamanhosPalavras(frase)}`);
  