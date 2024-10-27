function modificarFrase(frase) {
    return frase
      .split(" ")
      .map((palavra) => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
      })
      .join(" ");
  }
  
  const frase = "O dia está lindo.";
  console.log(modificarFrase(frase));
  