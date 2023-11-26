function obterParametroDaURL(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

document.addEventListener('DOMContentLoaded', function () {
  const temaSelecionado = obterParametroDaURL('tema');

  if (temaSelecionado) {
    document.getElementById('temaSelecionado').innerText = temaSelecionado;

    // Construa a URL do Firebase com base no tema selecionado
    const urlFirebase = `https://albert-17358-default-rtdb.firebaseio.com/Quizzes/${temaSelecionado}/.json`;

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

function exibirNomesDosQuizzes(quizzesData) {
  const tabela = document.getElementById('tabela');
  const tbody = tabela.getElementsByTagName('tbody')[0];

  // Limpe o conteúdo atual da tabela
  tbody.innerHTML = '';

  // Assumindo que os dados do Firebase são um objeto onde as chaves são os nomes dos quizzes
  const nomesDosQuizzes = Object.keys(quizzesData);

  // Exemplo: Adicione os nomes dos quizzes como linhas à tabela
  nomesDosQuizzes.forEach(nomeQuiz => {
    const novaLinha = tbody.insertRow();
    const novaCelula = novaLinha.insertCell(0);

    // Crie um botão para o nome do quiz
    const btnNomeQuiz = document.createElement('button');
    btnNomeQuiz.type = 'button';
    btnNomeQuiz.className = 'btn-nome-quiz';
    btnNomeQuiz.textContent = nomeQuiz;

    // Adicione um evento de clique para o botão do nome do quiz
    btnNomeQuiz.onclick = function () {
      // Redirecione para a página de edição de resposta quando o botão de nome do quiz for clicado
      window.location.href = `../adm/editarPergunta?tema=${encodeURIComponent(temaSelecionado)}&nomeQuiz=${encodeURIComponent(nomeQuiz)}`;
    }

    // Adicione o botão do nome do quiz à célula
    novaCelula.appendChild(btnNomeQuiz);

    // Adicione os botões 'Deletar' e 'Mudar Nome' à célula, se necessário
    const btnDeletar = document.createElement('button');
    btnDeletar.type = 'button';
    btnDeletar.className = 'btn-deletar';
    btnDeletar.onclick = function () {
      deletarQuiz(this);
    };
    btnDeletar.innerHTML = '<img src="../../../../static/assets/trash.png">';
    novaCelula.appendChild(btnDeletar);

    const btnMudarNomeQuiz = document.createElement('button');
    btnMudarNomeQuiz.type = 'button';
    btnMudarNomeQuiz.className = 'btn-mudarNomeQuiz';
    // Adicione a lógica para mudar o nome do quiz, se necessário
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

function deletarQuiz(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
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
      deletarQuiz(button);
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