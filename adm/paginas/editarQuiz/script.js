function finalizarPag() {
    window.location.href = '../../../adm/index.html';
}

function sair() {
  window.location.href = "../../../pages/inicial/index.html";
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaQuiz');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      window.location.href = '../../../adm/paginas/editarPergunta/index.html';
    });
  });
});