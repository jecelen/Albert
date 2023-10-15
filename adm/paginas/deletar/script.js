function finalizarPag() {
    window.location.href = '/Grupo_4_PW-T02-2023-2-main/adm/index.html';
}

function sair() {
  window.location.href = "/Grupo_4_PW-T02-2023-2-main/pages/inicial/index.html";
}

const cells = document.querySelectorAll('selecionaQuiz');

function deletarQuiz(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
