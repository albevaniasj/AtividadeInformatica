function verificaNumeros(num1, num2) {
    return (
      num1 === 30 ||
      num2 === 30 ||
      num1 + num2 === 30 ||
      (num1 === 12 && num2 === 12)
    );
  }
  
  const numero1 = 15;
  const numero2 = 15;
  
  console.log(verificaNumeros(numero1, numero2));
  