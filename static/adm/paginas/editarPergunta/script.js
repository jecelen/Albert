function obterParametroDaURL(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

document.addEventListener('DOMContentLoaded', function () {
  const temaSelecionado = obterParametroDaURL('tema');
  const nomeQuiz = obterParametroDaURL('nomeQuiz');

  if (nomeQuiz) {
    document.getElementById('quizSelecionado').innerText = nomeQuiz;

    const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/${nomeQuiz}.json`;

    fetch(urlFirebase)
      .then(response => response.json())
      .then(data => {
        exibirPerguntas(data);
      })
      .catch(error => console.error('Erro ao obter dados do Firebase:', error));
  } else {
    console.error('Nome do Quiz não especificado na URL.');
  }
});

function exibirPerguntas(data) {
  const tabela = document.getElementById('tabela');
  const tbody = tabela.getElementsByTagName('tbody')[0];

  tbody.innerHTML = '';

  if (!data) {
    console.error('Dados de perguntas não encontrados.');
    return;
  }

  Object.keys(data).forEach(chavePergunta => {
    const pergunta = data[chavePergunta]?.Pergunta;

    if (pergunta) {

      const novaLinha = tbody.insertRow();
      const novaCelula = novaLinha.insertCell(0);
      
      const btnPergunta = document.createElement('button');
      btnPergunta.type = 'button';
      btnPergunta.className = 'btn-nome-quiz';
      btnPergunta.textContent = pergunta;

      
      novaCelula.appendChild(btnPergunta);
    }
  });
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
  console.log(`Deletando pergunta ${chavePergunta} do quiz ${chaveQuiz}`);
  row.parentNode.removeChild(row);
}

function mudarPergunta(button) {

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

