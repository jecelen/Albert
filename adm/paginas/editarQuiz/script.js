function finalizarPag() {
    window.location.href = '/Grupo_4_PW-T02-2023-2-main/adm/index.html';
}

function sair() {
  window.location.href = "/Grupo_4_PW-T02-2023-2-main/pages/inicial/index.html";
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaQuiz');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      window.location.href = '/Grupo_4_PW-T02-2023-2-main/adm/paginas/editarPergunta/index.html';
    });
  });
});