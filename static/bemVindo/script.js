function sair() {
  window.location.href = "../";
}

function admin(){
  window.location.href = "../adm";
}

function novoJogo() {
  window.location.href = "../selecionarTema";
}

function verRanking() {
  window.location.href = "../selecionarRanking";
}

function meuPerfil() {
  window.location.href = "../perfil";
}

function nomeUser() {
  var nome;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      nome = data.unome;
      document.getElementById("bemVindo").innerHTML =
        "Seja bem vindo(a), " + nome + ".";
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}
