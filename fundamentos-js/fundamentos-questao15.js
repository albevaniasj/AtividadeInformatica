function ordenarLista(arr) {
  return arr.sort((a, b) => a - b);
}

const numeros = [10, 58, 68, 88, 25, 45];
console.log(ordenarLista(numeros));
