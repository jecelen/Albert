function sair() {
  window.location.href = "../";
}


function finalizarPag() {

  quiz = document.getElementById("nomeQuiz").value;
  tema = document.getElementById("categoria").value;
  pergunta = document.getElementById("pergunta").value;
  op1 = document.getElementById("opcao1").value;
  op2 = document.getElementById("opcao2").value;
  op3 = document.getElementById("opcao3").value;
  rc = document.getElementById("resposta").value;

  const dados = {
    quiz: quiz,
    tema: tema,
    pergunta: pergunta,
    op1: op1,
    op2: op2,
    op3: op3,
    rc: rc
  };

  fetch('/criar_pergunta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    alert('Pergunta criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao enviar solicitação:', error);
    alert(error);
  });
}


function meuPerfil() {
  window.location.href = "../perfil";
}
