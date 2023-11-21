function registro() {
  window.location.href = "../registro";
}

function entrar() {
  window.location.href = "../login";
}


function chamarAPI() {
  fetch('http://localhost:5000/api/inicial')
      .then(response => response.json())
      .then(data => {
          // Manipular os dados recebidos do back-end
          document.getElementById('mensagem').innerText = data.mensagem;
      })
      .catch(error => console.error('Erro:', error));
}


