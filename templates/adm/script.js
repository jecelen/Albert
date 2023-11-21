function paginaCriar() {
  window.location.href = "./paginas/criar/index.html";
}

function paginaEditar() {
  window.location.href = "./paginas/editarTema/index.html";
}

function paginaDeletar() {
  window.location.href = "./paginas/deletarTema/index.html";
}

function sair() {
  window.location.href = "../pages/inicial/index.html";
}

function meuPerfil() {
  window.location.href = "../pages/perfilUsuario/index.html";
}

function nomeUser() {
  var nome;
  fetch("../../assets/userExemple.json")
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
