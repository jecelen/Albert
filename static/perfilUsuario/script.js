function voltar() {
  window.location.href = "../bemVindo";
}

function meuPerfil() {
  window.location.href = "../perfil";
}
/*
function user() {
  var nome;
  var mail;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      nome = data.unome;
      mail = data.uemail;
      console.log(nome);
      document.getElementById("nome").innerHTML = ": " + nome;
      document.getElementById("mail").innerHTML = ": " + mail;
      "Seja bem vindo(a), " + nome + "."; 
      
    })
    
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}
*/

function userNome() {
  var nome;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      nome = data.unome;
      document.getElementById("username").value = nome; 
      
    })
    
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

function userMail() {
  var mail;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      mail = data.uemail;
      document.getElementById("email").value = mail; 
      
    })
    
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}

function userSenha() {
  var senha;
  fetch("../../../static/assets/userExemple.json")
    .then((Response) => Response.json())
    .then((data) => {
      senha = data.usenha;
      document.getElementById("senha").value = senha; 
      
    })
    
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
}






/*
let usuario = {
  username: "Shawlin",
  email: "user@mail.com",
  senha: "docedeleite"
};

// Função para preencher o formulário com as informações do usuário
function preencherFormulario() {
  document.getElementById('username').value = usuario.username;
  document.getElementById('email').value = usuario.email;
  document.getElementById('senha').value = usuario.senha;
}

// Função para atualizar as informações do usuário
function updateUser() {
  // Obter os valores atualizados do formulário
  const novoUsername = document.getElementById('username').value;
  const novoEmail = document.getElementById('email').value;
  const novaSenha = document.getElementById('senha').value;

  // Atualizar as informações do usuário
  usuario.username = novoUsername;
  usuario.email = novoEmail;
  usuario.senha = novaSenha;

  // Exibir mensagem ou enviar dados atualizados para o servidor (depende do seu caso de uso)
  console.log("Informações do usuário atualizadas:", usuario);
}

// Preencher o formulário com as informações do usuário ao carregar a página
preencherFormulario();
*/
