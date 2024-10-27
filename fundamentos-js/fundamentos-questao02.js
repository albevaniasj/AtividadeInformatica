function calcularAreaTriangulo(a, b, c) {
  const semiPerimetro = (a + b + c) / 2;
  const area = Math.sqrt(
    semiPerimetro *
      (semiPerimetro - a) *
      (semiPerimetro - b) *
      (semiPerimetro - c)
  );
  return area;
}

const lado1 = 5;
const lado2 = 6;
const lado3 = 7;

console.log(
  `A área do triângulo é: ${calcularAreaTriangulo(lado1, lado2, lado3).toFixed(
    2
  )}`
);
