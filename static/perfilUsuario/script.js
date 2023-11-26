function voltar() {
  window.location.href = "../bemVindo";
}

function meuPerfil() {
  window.location.href = "../perfil";
}

function user() {
  var uid = localStorage.getItem('uid');
  fetch('/info-usuario', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + uid,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter dados do usuário. Status: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Preencher o formulário com os dados do usuário obtidos do back-end
    document.getElementById('email').value = data.email;
    document.getElementById('senha').value = '***';  // Exibindo asteriscos para a senha
  })
  .catch(error => {
    console.error('Erro ao obter dados do usuário:', error);
  });
}

function updateUser(){
    var uid = localStorage.getItem('uid');
    var novoEmail = document.getElementById("email").value;
    var novaSenha = document.getElementById("senha").value;
    console.log(novaSenha);

    var dadosAtualizacao = {
      uid: uid,
      email: novoEmail,
      senha: novaSenha
  };

  if(novaSenha == '***'){
    alert('Favor digitar a senha para confirmação.')
  }
  
  else{
  // Requisição para a rota do backend que atualiza as credenciais
  fetch('/atualizar_credenciais', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosAtualizacao),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao atualizar credenciais. Status: ' + response.status);
      }
      return response.json();
  })
  .then(data => {
      console.log('Resposta do servidor:', data);
      alert('Credenciais atualizadas com sucesso!');
  })
  .catch(error => {
      console.error('Erro ao enviar solicitação:', error);
      alert(error);
  });
}
}