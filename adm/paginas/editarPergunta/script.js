function finalizarPag() {
    window.location.href = '/Grupo_4_PW-T02-2023-2-main/adm/index.html';
}

function sair() {
  window.location.href = "/Grupo_4_PW-T02-2023-2-main/pages/inicial/index.html";
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
        window.location.href = '/Grupo_4_PW-T02-2023-2-main/adm/paginas/editarResposta/index.html';
      }
    });
  });

  // Método para impedir que deletar e seleciona ocorram ao mesmo tempo.
  const btnDeletar = document.querySelectorAll('.btn-deletar');
  btnDeletar.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); 
      deletarPergunta(button);
    });
  });
});

function sair() {
  window.location.href = "/Grupo_4_PW-T02-2023-2-main/pages/inicial/index.html";
}

// Função para tornar o título editável
function editarTitulo(element) {
  const textoOriginal = element.textContent;

  // Crie um elemento de entrada de texto
  const input = document.createElement("input");
  input.value = textoOriginal;

  // Substitua o título pelo elemento de entrada de texto
  element.replaceWith(input);

  // Quando o usuário pressionar Enter, atualize o título e volte a exibi-lo
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const novoTexto = input.value;
      element.textContent = novoTexto;
      input.replaceWith(element);
    }
  });

  // Quando o elemento de entrada de texto perde o foco, atualize o título e volte a exibi-lo
  input.addEventListener("blur", function () {
    const novoTexto = input.value;
    element.textContent = novoTexto;
    input.replaceWith(element);
  });

  // Dê o foco à entrada de texto para que o usuário possa editar imediatamente
  input.focus();
}
