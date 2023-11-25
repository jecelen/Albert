function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
  {
      question: "Qual é o maior oceano do mundo?",
      options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
      correctAnswer: "Oceano Pacífico"
  },
  {
      question: "Qual é o rio mais longo do mundo?",
      options: ["Rio Nilo", "Rio Amazonas", "Rio Yangtzé", "Rio Mississipi"],
      correctAnswer: "Rio Amazonas"
  },
  {
      question: "Em quantos continentes está localizado o Deserto do Saara?",
      options: ["Dois", "Três", "Quatro", "Cinco"],
      correctAnswer: "Três"
  },
  {
      question: "Qual é o ponto mais alto do mundo?",
      options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Fuji"],
      correctAnswer: "Monte Everest"
  },
  {
      question: "Qual é o país mais extenso do mundo em área territorial?",
      options: ["Canadá", "Rússia", "China", "Estados Unidos"],
      correctAnswer: "Rússia"
  },
  {
      question: "Em que continente está localizada a Austrália?",
      options: ["África", "Europa", "Ásia", "Oceania"],
      correctAnswer: "Oceania"
  },
  {
      question: "Qual é a capital do Canadá?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      correctAnswer: "Ottawa"
  },
  {
      question: "Qual é o maior lago de água doce do mundo em volume?",
      options: ["Lago Baikal", "Lago Vitória", "Lago Superior", "Lago Titicaca"],
      correctAnswer: "Lago Baikal"
  },
  {
      question: "Em que país está localizado o Deserto do Atacama?",
      options: ["Brasil", "Argentina", "Chile", "Peru"],
      correctAnswer: "Chile"
  },
  {
      question: "Qual é a capital da Índia?",
      options: ["Mumbai", "Nova Délhi", "Calcutá", "Bangalore"],
      correctAnswer: "Nova Délhi"
  },
  {
      question: "Quantos países fazem fronteira com o Brasil?",
      options: ["Sete", "Nove", "Dez", "Doze"],
      correctAnswer: "Dez"
  },
  {
      question: "Qual é o maior deserto frio do mundo?",
      options: ["Deserto do Saara", "Deserto do Atacama", "Deserto do Gobi", "Antártida"],
      correctAnswer: "Antártida"
  },
  {
      question: "Em que oceano está localizado o Polo Norte?",
      options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
      correctAnswer: "Oceano Ártico"
  },
  {
      question: "Qual é o país mais populoso do mundo?",
      options: ["Índia", "Estados Unidos", "China", "Brasil"],
      correctAnswer: "China"
  },
  {
      question: "Em que cordilheira está localizado o Monte Everest?",
      options: ["Montanhas Rochosas", "Cordilheira dos Andes", "Cordilheira dos Cárpatos", "Cordilheira do Himalaia"],
      correctAnswer: "Cordilheira do Himalaia"
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