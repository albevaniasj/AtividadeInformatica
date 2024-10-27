function palavraNaFrase(frase, palavra) {
    return frase.includes(palavra);
  }
  
  const frase = "Esta é uma frase de teste";
  const palavra = "frase";
  console.log(palavraNaFrase(frase, palavra));
  