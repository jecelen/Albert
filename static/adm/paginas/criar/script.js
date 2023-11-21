window.addEventListener("load", function () {
  adicionarPergunta();
});

function sair() {
  window.location.href = "../";
}

function finalizarPag() {
  const nomeQuiz = document.getElementById("nomeQuiz").value;
  const categoriaSelecionada = document.getElementById("categoria").value;
  const perguntasDiv = document.querySelectorAll(".perguntas > div");

  if (nomeQuiz.trim() === "") {
    alert("Por favor, preencha o nome do quiz.");
    return; // Não redirecione a página
  }

  let todasPreenchidas = true;
  const novoQuiz = {
    nome: nomeQuiz,
    categoria: categoriaSelecionada,
    perguntas: [],
  };

  perguntasDiv.forEach((perguntaDiv, index) => {
    const pergunta = perguntaDiv.querySelector(
      `input[name^='pergunta${index + 1}']`
    ).value;
    const opcao1 = perguntaDiv.querySelector(
      `input[name^='opcao${index + 1}1']`
    ).value;
    const opcao2 = perguntaDiv.querySelector(
      `input[name^='opcao${index + 1}2']`
    ).value;
    const opcao3 = perguntaDiv.querySelector(
      `input[name^='opcao${index + 1}3']`
    ).value;
    const resposta = perguntaDiv.querySelector(
      `input[name^='resposta${index + 1}']`
    ).value;

    if (
      pergunta.trim() === "" ||
      opcao1.trim() === "" ||
      opcao2.trim() === "" ||
      opcao3.trim() === "" ||
      resposta.trim() === ""
    ) {
      todasPreenchidas = false;
      alert("Por favor, preencha todas as perguntas e respostas do quiz.");
      return; // Não redirecione a página
    }

    const novaPergunta = {
      pergunta: pergunta,
      opcao1: opcao1,
      opcao2: opcao2,
      opcao3: opcao3,
      resposta: resposta,
    };

    novoQuiz.perguntas.push(novaPergunta);
  });

  if (todasPreenchidas) {
    const quizDataDiv = document.getElementById("quizData");
    quizDataDiv.innerHTML = `
            <h3>Quiz Criado</h3>
            <p><strong>Nome do Quiz:</strong> ${nomeQuiz}</p>
            <p><strong>Categoria:</strong> ${categoriaSelecionada}</p>
            <h4>Perguntas:</h4>
        `;

    novoQuiz.perguntas.forEach((pergunta, index) => {
      quizDataDiv.innerHTML += `
                <p><strong>Pergunta ${index + 1}:</strong> ${
        pergunta.pergunta
      }</p>
                <p><strong>Opção 1:</strong> ${pergunta.opcao1}</p>
                <p><strong>Opção 2:</strong> ${pergunta.opcao2}</p>
                <p><strong>Opção 3:</strong> ${pergunta.opcao3}</p>
                <p><strong>Resposta Correta:</strong> ${pergunta.resposta}</p>
            `;
    });
    /*Uso apenas para testes, exibe os dados do quiz criado
    const quizData = document.getElementById("quizData");
    quizData.style.display = "block";*/
    window.location.href = "../adm";
  }
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

perguntasDiv.forEach((perguntaDiv) => {
  const pergunta = {
    pergunta: perguntaDiv.querySelector("input[name^='pergunta']").value,
    opcoes: [
      perguntaDiv.querySelector("input[name$='1']").value,
      perguntaDiv.querySelector("input[name$='2']").value,
      perguntaDiv.querySelector("input[name$='3']").value,
    ],
    respostaCorreta: perguntaDiv.querySelector("input[name^='resposta']").value,
  };

  novoQuiz.perguntas.push(pergunta);
});

document.getElementById("nomeQuiz").value = "";
document.getElementById("categoria").value = "Geografia";
document.querySelector(".perguntas").innerHTML = "";

function meuPerfil() {
  window.location.href = "../perfil";
}
