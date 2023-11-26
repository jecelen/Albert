function voltar() {
  window.location.href = "../";
}

function verificar() {
  
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  fetch('/autenticar_usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    window.location.href = "/bemVindo";
  })
  .catch((error) => {
    console.error('Erro ao enviar solicitação:', error);
    alert(error);
  });
  }
