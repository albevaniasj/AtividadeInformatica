function maiorPalavra(frase) {
  const palavras = frase.split(" ");
  let maior = palavras[0];

  for (let palavra of palavras) {
    if (palavra.length > maior.length) {
      maior = palavra;
    }
  }

  return maior;
}

const frase = "Encontre a maior palavra nesta frase";
console.log(`Maior palavra: ${maiorPalavra(frase)}`);
