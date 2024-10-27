function checarNumeros(num1, num2, num3) {
  if (
    num1 >= 50 &&
    num1 <= 99 &&
    num2 >= 50 &&
    num2 <= 99 &&
    num3 >= 50 &&
    num3 <= 99
  ) {
    console.log("Sucesso");
  } else {
    console.log("Erro");
  }
}

checarNumeros(60, 75, 90);
checarNumeros(30, 55, 60);
