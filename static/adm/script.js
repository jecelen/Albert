function paginaCriar() {
  window.location.href = "../adm/criar";
}

function paginaEditar() {
  window.location.href = "../adm/editarTema";
}

function paginaDeletar() {
  window.location.href = "../adm/deletarTema";
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
