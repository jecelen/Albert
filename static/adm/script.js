function paginaCriar() {
  window.location.href = "../adm/criar";
}

function user(){
  window.location.href = "../bemVindo";
}

function paginaEditar() {
  window.location.href = "../adm/editarTema";
}

function sair() {
  window.location.href = "../";
}

function meuPerfil() {
  window.location.href = "../perfil";
}

function nomeUser() {
  var nome;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      nome = data.admnome;
      document.getElementById("bemVindo").innerHTML =
        "Seja bem vindo(a), " + nome + ".";
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}
