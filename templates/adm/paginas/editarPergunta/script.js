function finalizarPag() {
    window.location.href = '../../../adm/index.html';
}

function sair() {
  window.location.href = "../../../pages/inicial/index.html";
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
        window.location.href = '../../../adm/paginas/editarResposta/index.html';
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

function sair() {
  window.location.href = "../../../pages/inicial/index.html";
}

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
