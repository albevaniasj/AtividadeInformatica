function inverterNumero(numero) {
    const numeroStr = numero.toString();
    let numeroInvertido = "";
  
    for (let i = numeroStr.length - 1; i >= 0; i--) {
      switch (numeroStr[i]) {
        default:
          numeroInvertido += numeroStr[i];
      }
    }
  
    return parseInt(numeroInvertido);
  }
  
  console.log(inverterNumero(12356));
  