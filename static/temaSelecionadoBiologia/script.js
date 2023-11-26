function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
    {
        question: "Qual é a célula responsável pela produção de energia nas células eucarióticas?",
        options: ["Mitocôndria", "Cloroplasto", "Núcleo", "Retículo Endoplasmático"],
        correctAnswer: "Mitocôndria"
    },
    {
        question: "O que são os seres autotróficos?",
        options: ["Organismos que produzem seu próprio alimento", "Organismos que se alimentam de outros organismos", "Organismos decompositores", "Organismos anaeróbicos"],
        correctAnswer: "Organismos que produzem seu próprio alimento"
    },
    {
        question: "Qual é a principal função do sistema circulatório?",
        options: ["Transportar oxigênio para as células", "Produzir hormônios", "Digestão de alimentos", "Controle do equilíbrio eletrolítico"],
        correctAnswer: "Transportar oxigênio para as células"
    },
    {
        question: "O que é a mitose?",
        options: ["Processo de divisão celular que forma células haploides", "Processo de divisão celular que forma células diploides", "Processo de produção de gametas", "Processo de duplicação de DNA"],
        correctAnswer: "Processo de divisão celular que forma células diploides"
    },
    {
        question: "Qual é o órgão humano responsável pela produção de insulina?",
        options: ["Pâncreas", "Fígado", "Rins", "Coração"],
        correctAnswer: "Pâncreas"
    },
    {
        question: "O que é a fotossíntese?",
        options: ["Processo de quebra de glicose para produção de energia", "Processo de absorção de nutrientes no intestino delgado", "Processo de produção de oxigênio e glicose a partir da luz solar", "Processo de respiração celular"],
        correctAnswer: "Processo de produção de oxigênio e glicose a partir da luz solar"
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        options: ["Fígado", "Coração", "Cérebro", "Pele"],
        correctAnswer: "Pele"
    },
    {
        question: "O que são os genes?",
        options: ["Partes do corpo humano", "Unidades básicas da hereditariedade", "Células reprodutivas", "Moléculas de proteína"],
        correctAnswer: "Unidades básicas da hereditariedade"
    },
    {
        question: "O que é a simbiose?",
        options: ["Relação entre organismos onde ambos se beneficiam", "Relação entre organismos onde um se beneficia e o outro é prejudicado", "Relação entre organismos onde um é neutral em relação ao outro", "Relação entre organismos e o ambiente físico"],
        correctAnswer: "Relação entre organismos onde ambos se beneficiam"
    },
    {
        question: "O que é a teoria da evolução de Charles Darwin?",
        options: ["Explicação sobre a formação do sistema solar", "Explicação sobre a origem da vida na Terra", "Explicação sobre a diversidade das espécies através da seleção natural", "Explicação sobre a formação de cadeias alimentares"],
        correctAnswer: "Explicação sobre a diversidade das espécies através da seleção natural"
    },
    {
        question: "O que é um ecossistema?",
        options: ["Um órgão do corpo humano", "Uma comunidade de organismos e seu ambiente físico", "Um tipo de célula animal", "Um tipo de solo"],
        correctAnswer: "Uma comunidade de organismos e seu ambiente físico"
    },
    {
        question: "O que são os leucócitos?",
        options: ["Células sanguíneas responsáveis pela coagulação", "Células sanguíneas vermelhas", "Células do sistema imunológico", "Células do sistema nervoso"],
        correctAnswer: "Células do sistema imunológico"
    },
    {
        question: "O que é a cadeia alimentar?",
        options: ["Sequência de restaurantes populares", "Sequência de alimentos que devemos consumir", "Sequência de processos químicos no corpo humano", "Sequência de transferência de energia entre organismos"],
        correctAnswer: "Sequência de transferência de energia entre organismos"
    },
    {
        question: "Qual é o processo pelo qual as plantas convertem a energia solar em energia química?",
        options: ["Fotossíntese", "Respiração celular", "Mitose", "Fermentação"],
        correctAnswer: "Fotossíntese"
    },
    {
        question: "O que é a clonagem?",
        options: ["Processo de reprodução sexuada", "Processo de reprodução assexuada", "Processo de criação de células-tronco", "Processo de manipulação genética para criar organismos geneticamente idênticos"],
        correctAnswer: "Processo de manipulação genética para criar organismos geneticamente idênticos"
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