const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [90, 85, 78]],
    ["Aluno4", [60, 65, 55]],
    ["Aluno5", [70, 80, 90]],
  ];
  
  function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
  }
  
  function verificarSituacao(aluno) {
    const media = calcularMedia(aluno[1]);
    const situacao = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${aluno[0]}, média ${media.toFixed(2)}, ${situacao}`);
  }
  
  alunos.forEach(verificarSituacao);
  