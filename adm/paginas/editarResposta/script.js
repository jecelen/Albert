function finalizarPag() {
    window.location.href = '../../../adm/index.html';
}

function sair() {
  window.location.href = "../../../pages/inicial/index.html";
}

const cells = document.querySelectorAll('selecionaQuiz');


function sair() {
  window.location.href = "../../../pages/inicial/index.html";
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
