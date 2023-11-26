function confirmacao() {
  // Enviar e-mail para redefinir a senha
  var email = document.getElementById("email").value;

  fetch("../redefinir_senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      })
      .then(response => {
        if (response.ok) {
          console.log("Resposta do servidor:", response);
          alert("Um e-mail de redefinição de senha foi enviado para o seu endereço.");
        } else {
          alert("Erro ao processar a solicitação. Verifique se o endereço de e-mail está correto.");
        }
      })
      .catch(error => {
        console.error("Erro ao enviar a solicitação:", error);
        alert("Erro ao processar a solicitação. Tente novamente mais tarde.");
      });
    }