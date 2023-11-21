function voltar() {
  window.location.href = "../";
}

function verificar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      if (email == data.uemail && senha == data.usenha) {
        window.location.href = "../bemVindo";
      } else if (email == data.admemail && senha == data.admsenha) {
        window.location.href = "../adm";
      } else {
        alert("E-mail ou senha inválido(a)!");
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}
