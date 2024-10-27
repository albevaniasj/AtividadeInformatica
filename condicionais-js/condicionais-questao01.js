function compararNumeros(num1, num2) {
    const num1EhImpar = num1 % 2 !== 0;
    const num2EhImpar = num2 % 2 !== 0;
  
    if (num1EhImpar && !num2EhImpar) {
      console.log(`${num1} é maior porque é ímpar.`);
    } else if (!num1EhImpar && num2EhImpar) {
      console.log(`${num2} é maior porque é ímpar.`);
    } else {
      const maior = num1 > num2 ? num1 : num2;
      console.log(`${maior} é o maior.`);
    }
  }
  
  compararNumeros(8, 13);
  compararNumeros(12, 14);
  