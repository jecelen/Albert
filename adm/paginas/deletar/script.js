function finalizarPag() {
    window.location.href = '../../../adm/index.html';
}

function sair() {
  window.location.href = "../../../pages/inicial/index.html";
}

function meuPerfil() {
  window.location.href = "../../../pages/perfilUsuario/index.html";
}

const cells = document.querySelectorAll('selecionaQuiz');

function deletarQuiz(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}