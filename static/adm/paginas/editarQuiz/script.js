function obterParametroDaURL(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

document.addEventListener('DOMContentLoaded', function () {
  const temaSelecionado = obterParametroDaURL('tema');

  if (temaSelecionado) {
    document.getElementById('temaSelecionado').innerText = temaSelecionado;
    const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/.json`;

    fetch(urlFirebase)
      .then(response => response.json())
      .then(data => {
        exibirNomesDosQuizzes(data);
      })
      .catch(error => console.error('Erro ao obter dados do Firebase:', error));
  } else {
    console.error('Tema não especificado na URL.');
  }
});

function exibirNomesDosQuizzes(quizzesData) {
  const tabela = document.getElementById('tabela');
  const tbody = tabela.getElementsByTagName('tbody')[0];

  tbody.innerHTML = '';

  const nomesDosQuizzes = Object.keys(quizzesData);

  nomesDosQuizzes.forEach(nomeQuiz => {
    const novaLinha = tbody.insertRow();
    const novaCelula = novaLinha.insertCell(0);

    const btnNomeQuiz = document.createElement('button');
    btnNomeQuiz.type = 'button';
    btnNomeQuiz.className = 'btn-nome-quiz';
    btnNomeQuiz.textContent = nomeQuiz;

    btnNomeQuiz.onclick = function () {
      window.location.href = `../adm/editarPergunta?tema=${encodeURIComponent(temaSelecionado)}&nomeQuiz=${encodeURIComponent(nomeQuiz)}`;
    }

    novaCelula.appendChild(btnNomeQuiz);

    const btnDeletar = document.createElement('button');
    btnDeletar.type = 'button';
    btnDeletar.className = 'btn-deletar';
    btnDeletar.onclick = function () {
      deletarQuiz(temaSelecionado, nomeQuiz, this);
    };
    btnDeletar.innerHTML = '<img src="../../../../static/assets/trash.png">';
    novaCelula.appendChild(btnDeletar);

    const btnMudarNomeQuiz = document.createElement('button');
    btnMudarNomeQuiz.type = 'button';
    btnMudarNomeQuiz.className = 'btn-mudarNomeQuiz';
    btnMudarNomeQuiz.onclick = function () {
      mudarNomeQuiz(this);
    };
    btnMudarNomeQuiz.innerHTML = 'Mudar nome';
    novaCelula.appendChild(btnMudarNomeQuiz);
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

function mudarNomeQuiz(button) {

}

function deletarQuiz(temaSelecionado, nomeQuiz, button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/${nomeQuiz}.json`;

  fetch(urlFirebase, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro ao deletar quiz: ${response.status} - ${response.statusText}`);
    }
    console.log('Quiz deletado com sucesso.');
  })
  .catch(error => console.error('Erro ao deletar quiz:', error));
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaPergunta');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      const cellText = cell.textContent.trim();
      if (cellText !== "") {
        window.location.href = '../adm/editarPergunta';
      }
    });
  });

  const btnDeletar = document.querySelectorAll('.btn-deletar');
  btnDeletar.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();

      const temaSelecionado = obterParametroDaURL('tema');
      const nomeQuiz = button.parentNode.querySelector('.btn-nome-quiz').textContent;

      deletarQuiz(temaSelecionado, nomeQuiz, button);
    });
  });
});



//document.addEventListener("DOMContentLoaded", function() {
//  const cells = document.querySelectorAll('.quizzes');

 // cells.forEach((cell) => {
  //  cell.addEventListener('click', () => {
   //   window.location.href = '../adm/editarPergunta';
  //  });
//  });
//});