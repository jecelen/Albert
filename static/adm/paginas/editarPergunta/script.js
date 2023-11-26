function obterParametroDaURL(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}
//window.location.href = `../adm/editarPergunta?tema=${encodeURIComponent(temaSelecionado)}&nomeQuiz=${encodeURIComponent(nomeQuiz)}`;

document.addEventListener('DOMContentLoaded', function () {
  const nomeQuiz = obterParametroDaURL('nomeQuiz');
  const quizSelecionado = obterParametroDaURL('nomeQuiz');

  if (quizSelecionado) {
    document.getElementById('quizSelecionado').innerText = quizSelecionado;

    // Construa a URL do Firebase com base no tema selecionado
    const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/${nomeQuiz}/.json`;

    // Faça uma solicitação para obter os dados do Firebase
    fetch(urlFirebase)
      .then(response => response.json())
      .then(data => {
        // Manipule os dados recebidos (nomes dos quizzes)
        exibirNomesDosQuizzes(data);
      })
      .catch(error => console.error('Erro ao obter dados do Firebase:', error));
  } else {
    console.error('Tema não especificado na URL.');
  }
});


function obterDadosEExibirPerguntas(temaSelecionado, nomeQuiz) {
  // Verifique se o tema e o nome do quiz estão disponíveis
  if (!temaSelecionado || !nomeQuiz) {
    console.error('Tema ou nome do quiz não especificado.');
    return;
  }

  // Construa a URL do Firebase com base no tema e nome do quiz
  const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/${nomeQuiz}/.json`;
  // Faça uma solicitação para obter os dados do Firebase
  fetch(urlFirebase)
    .then(response => response.json())
    .then(data => {
      // Manipule os dados recebidos (perguntas do quiz)
      exibirNomesDasPerguntas(data);
    })
    .catch(error => console.error('Erro ao obter dados do Firebase:', error));
}


function finalizarPag() {
    window.location.href = '../adm';
}

function sair() {
  window.location.href = "../";
}

function meuPerfil() {
window.location.href = "../perfil";
}

const cells = document.querySelectorAll('selecionaQuiz');

function deletarPergunta(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaPergunta');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      const cellText = cell.textContent.trim();
      if (cellText !== "") {
        window.location.href = '../adm/editarResposta';
      }
    });
  });

  const btnDeletar = document.querySelectorAll('.btn-deletar');
  btnDeletar.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); 
      deletarPergunta(button);
    });
  });
});


function editarTitulo(element) {
  const textoOriginal = element.textContent;

  const input = document.createElement("input");
  input.value = textoOriginal;

  element.replaceWith(input);

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const novoTexto = input.value;
      element.textContent = novoTexto;
      input.replaceWith(element);
    }
  });

  input.addEventListener("blur", function () {
    const novoTexto = input.value;
    element.textContent = novoTexto;
    input.replaceWith(element);
  });

  input.focus();
}
