function voltar() {
  window.location.href = "../bemVindo";
}

function meuPerfil() {
  window.location.href = "../perfil";
}
function user() {
  var nome;
  var mail;
  fetch("../../../assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      nome = data.unome;
      mail = data.uemail;
      document.getElementById("nome").innerHTML = ": " + nome;
      document.getElementById("mail").innerHTML = ": " + mail;
      "Seja bem vindo(a), " + nome + ".";
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}
