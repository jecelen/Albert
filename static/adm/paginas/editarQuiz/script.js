function finalizarPag() {
    window.location.href = '../adm';
}

function sair() {
  window.location.href = "../";
}

function meuPerfil() {
window.location.href = "../perfil";
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaQuiz');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      window.location.href = '../adm/editarPergunta';
    });
  });
});