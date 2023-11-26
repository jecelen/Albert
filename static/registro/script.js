function registro(){
  var email = document.getElementById("email").value;
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

if(password2 == senha){

fetch('/registrofirebase', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, senha, nome}),
})
.then(response => response.json())
.then(data => {
  console.log('Resposta do servidor:', data);
  alert('Usuário registrado com sucesso! Faça login para jogar.');
  window.location.href = "../";
})
.catch((error) => {
  console.error('Erro ao enviar solicitação:', error);
});
}
else{
  alert('As senhas digitadas não são iguais.')
}
}

function voltar() {
  window.location.href = "../";
}
