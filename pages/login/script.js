function voltar(){
    window.location.href = "../inicial/index.html";
}

function verificar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    fetch('../../assets/userExemple.json')
        .then(Response => Response.json())
        .then(data => {
            if(email == data.email && senha == data.senha){
                window.location.href = "../inicial/index.html";
            }
            else{
                alert("E-mail ou senha inválido(a)!");
            }
            })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
        });

}