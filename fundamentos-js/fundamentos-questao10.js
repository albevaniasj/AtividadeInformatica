function converterNome(nomeCompleto) {
    const nomes = nomeCompleto.split(" ");
    const ultimoNome = nomes.pop();
    const iniciais = nomes.map((nome) => `${nome[0]}.`).join(" ");
    return `${ultimoNome}, ${iniciais}`;
  }
  
  const nome = "Albevania Silva Juvenal";
  console.log(converterNome(nome));
  