function contarVogaisEConsoantes(frase) {
    const vogais = "aeiouAEIOU";
    let contadorVogais = 0;
    let contadorConsoantes = 0;
  
    for (let char of frase) {
      if (vogais.includes(char)) {
        contadorVogais++;
      } else if (/[a-zA-Z]/.test(char)) {
        contadorConsoantes++;
      }
    }
  
    return {
      vogais: contadorVogais,
      consoantes: contadorConsoantes,
    };
  }
  
  const frase = "Esta é uma frase de teste";
  const resultado = contarVogaisEConsoantes(frase);
  console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);
  