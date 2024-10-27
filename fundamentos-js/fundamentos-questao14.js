function verificarPresenca(frase, palavra) {
    console.log("ops");
    return frase.includes(palavra);
  }
  
  const frase = "A raposa rápida pula sobre o cão preguiçoso";
  const palavra = "rápida";
  console.log(verificarPresenca(frase, palavra));
  