window.addEventListener('load', function() {
    adicionarPergunta();
  });

function finalizarPag() {
    window.location.href = '/quizAdm/admInicio.html';
}

let contadorPerguntas = 0;

function adicionarPergunta() {
  contadorPerguntas++;
  const perguntasDiv = document.querySelector(".perguntas");
  const novaPerguntaDiv = document.createElement("div");
  novaPerguntaDiv.innerHTML = `
      <h3>${contadorPerguntas}ª Pergunta</h3>
      <label for="pergunta${contadorPerguntas}"></label>
      <input type="text" id="pergunta${contadorPerguntas}" name="pergunta${contadorPerguntas}">
      <label for="opcao${contadorPerguntas}1">1ª Opção:</label>
      <input type="text" id="opcao${contadorPerguntas}1" name="opcao${contadorPerguntas}1">
      <label for="opcao${contadorPerguntas}2">2ª Opção:</label>
      <input type="text" id="opcao${contadorPerguntas}2" name="opcao${contadorPerguntas}2">
      <label for="opcao${contadorPerguntas}3">3ª Opção:</label>
      <input type="text" id="opcao${contadorPerguntas}3" name="opcao${contadorPerguntas}3">
      <label for="resposta${contadorPerguntas}">Resposta Correta:</label>
      <input type="text" id="resposta${contadorPerguntas}" name="resposta${contadorPerguntas}">
  `;
  perguntasDiv.appendChild(novaPerguntaDiv);
}