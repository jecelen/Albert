function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
    {
        question: "Qual país sediou a Copa do Mundo de Futebol de 2018?",
        options: ["Brasil", "Alemanha", "Rússia", "França"],
        correctAnswer: "Rússia"
    },
    {
        question: "Quem é considerado o maior jogador de basquete de todos os tempos?",
        options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"],
        correctAnswer: "Michael Jordan"
    },
    {
        question: "Em que esporte se destacou o jogador Pelé?",
        options: ["Tênis", "Golfe", "Futebol", "Basquete"],
        correctAnswer: "Futebol"
    },
    {
        question: "Qual é o evento esportivo conhecido como a Volta da França?",
        options: ["Corrida de Fórmula 1", "Competição de Natação", "Maratona de Atletismo", "Ciclismo"],
        correctAnswer: "Ciclismo"
    },
    {
        question: "Qual é o esporte praticado no Super Bowl nos Estados Unidos?",
        options: ["Basebol", "Hóquei no Gelo", "Futebol Americano", "Basquete"],
        correctAnswer: "Futebol Americano"
    },
    {
        question: "Qual é o esporte que tem quatro Grand Slam?",
        options: ["Futebol", "Tênis", "Golfe", "Críquete"],
        correctAnswer: "Tênis"
    },
    {
        question: "Quem é conhecido como 'The Greatest' (O Maior) no boxe?",
        options: ["Mike Tyson", "Floyd Mayweather", "Muhammad Ali", "Manny Pacquiao"],
        correctAnswer: "Muhammad Ali"
    },
    {
        question: "Qual é o esporte praticado no torneio Wimbledon?",
        options: ["Tênis", "Golfe", "Críquete", "Futebol"],
        correctAnswer: "Tênis"
    },
    {
        question: "Quem é o recordista de medalhas de ouro nas Olimpíadas?",
        options: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"],
        correctAnswer: "Michael Phelps"
    },
    {
        question: "Qual país é conhecido por sua dominação no esporte do sumô?",
        options: ["Coreia do Sul", "China", "Japão", "Tailândia"],
        correctAnswer: "Japão"
    },
    {
        question: "Quem é considerado o rei do futebol na Argentina?",
        options: ["Lionel Messi", "Diego Maradona", "Carlos Tevez", "Juan Román Riquelme"],
        correctAnswer: "Diego Maradona"
    },
    {
        question: "Qual é o esporte mais popular na Índia?",
        options: ["Críquete", "Hóquei no Gelo", "Futebol", "Badminton"],
        correctAnswer: "Críquete"
    },
    {
        question: "Qual é o torneio de tênis mais prestigiado do mundo?",
        options: ["Aberto da Austrália", "Roland Garros", "Wimbledon", "US Open"],
        correctAnswer: "Wimbledon"
    },
    {
        question: "Qual é o único país que participou de todas as edições dos Jogos Olímpicos modernos?",
        options: ["Estados Unidos", "Grécia", "França", "Reino Unido"],
        correctAnswer: "Grécia"
    },
    {
        question: "Em que esporte é concedida a 'Bola de Ouro'?",
        options: ["Futebol", "Golfe", "Tênis", "Basquete"],
        correctAnswer: "Futebol"
    },
    // Adicione mais perguntas conforme necessário
];
shuffleArray(questions);
  
  let currentQuestion = 0;
  let score = 0;
  let quizFuncionando = 1;
  
  function loadQuestion() {
      const questionElement = document.getElementById("question");
      const optionsContainer = document.getElementById("options-container");
  
      questionElement.textContent = questions[currentQuestion].question;
      optionsContainer.innerHTML = "";
  
      questions[currentQuestion].options.forEach((option, index) => {
          const optionElement = document.createElement("div");
          optionElement.classList.add("option");
          optionElement.textContent = option;
          optionElement.addEventListener("click", () => checkAnswer(option));
          optionsContainer.appendChild(optionElement);
      });
  }
  
  
  function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
  
    if (userAnswer === correctAnswer) {
        if(segundos >= 25)  
          score += 100;
        else if(segundos >= 20)
          score += 90;
        else if(segundos >= 15)
          score += 80;
        else if (segundos >= 10)
          score += 70;
        else if (segundos >= 5)
          score += 60;
        else if (segundos >= 0)
          score += 50;
        else
          score += 0;
    }
  
    currentQuestion++;
  
    if (currentQuestion <= 10) {
        loadQuestion();
    } else {
        endQuiz();
    }
    segundos = 30;
    nmrPergunta++;
    
  }
  
  function endQuiz() {
    const quizContainer = document.getElementById("container");
    quizContainer.innerHTML = `<h1>Você completou o quiz!</h1>
                               <h2>Sua pontuação: ${score}</h2>
                               <button onclick="voltar()">Voltar para o inicio</button>`;
    quizFuncionando = 0;
  }
  
  function voltar() {
    window.location.href = "../selecionarTema";
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  loadQuestion();
  
  let segundos = 30;
  let nmrPergunta = 1;
  
    // Função para atualizar o contador e verificar se atingiu zero
    function atualizarContador() {
        document.getElementById('contador').textContent = segundos;
        segundos--;
  
        // Verifica se o contador chegou a zero
        if(quizFuncionando == 1){
          if (segundos < 0) {
              clearInterval(intervalId); // Para o contador
              alert('Tempo esgotado!'); // Exibe uma mensagem ao atingir 0 segundos
              endQuiz();
          }
        }
        else
          segundos = 0;
    }
  
    // Chama a função a cada segundo
    const intervalId = setInterval(atualizarContador, 1000);
  
    function atualizarNumeroPerg(){
      document.getElementById('nmrPerg').textContent = nmrPergunta;
      
  
      if(nmrPergunta > 10){
        clearInterval(intervalPerg);
        endQuiz();
        quizFuncionando = 0;
        segundos = 0;
      }
    }
    const intervalPerg = setInterval(atualizarNumeroPerg, checkAnswer);
  
    function desistencia(){
      alert("Você desistiu do jogo");
      window.location.href = "../selecionarTema";
    }
  /*
    let opcao = 0;
  
    function conferirResp(){
      alert('Botao foi clicado');
      if (opcao == 1)
        alert('opcao1 foi escolhida');
      
      else if (opcao == 2)
        alert('opcao2 foi escolhida');
  
      else if (opcao == 3)
        alert('opcao3 foi escolhida');
      
      else if (opcao == 4)
        alert('opcao4 foi escolhida');
  
      else
        alert('Escolha uma opção');
    }
  
    function opcao1(){
      opcao = 1;
    }
  
    function opcao2(){
      opcao = 2;
    }
  
    function opcao3(){
      opcao = 3;
    }
  
    function opcao4(){
      opcao = 4;
    }*/