function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
  {
      question: "Qual civilização antiga construiu as pirâmides de Gizé?",
      options: ["Mesopotâmia", "Grécia Antiga", "Egito Antigo", "Império Romano"],
      correctAnswer: "Egito Antigo"
  },
  {
      question: "Quem foi o primeiro imperador romano?",
      options: ["Júlio César", "Augusto", "Nero", "Marco Aurélio"],
      correctAnswer: "Augusto"
  },
  {
      question: "Em que ano ocorreu a Revolução Francesa?",
      options: ["1789", "1804", "1832", "1871"],
      correctAnswer: "1789"
  },
  {
      question: "Quem foi o líder da Revolução Cubana em 1959?",
      options: ["Fidel Castro", "Che Guevara", "Batista", "Camilo Cienfuegos"],
      correctAnswer: "Fidel Castro"
  },
  {
      question: "Qual foi o evento que marcou o início da Primeira Guerra Mundial?",
      options: ["Ataque a Pearl Harbor", "Assassinato de Franz Ferdinand", "Batalha de Stalingrado", "Tratado de Versalhes"],
      correctAnswer: "Assassinato de Franz Ferdinand"
  },
  {
      question: "Quem foi o líder da União Soviética durante a maior parte da Guerra Fria?",
      options: ["Nikita Khrushchov", "Joseph Stalin", "Mikhail Gorbachev", "Vladimir Putin"],
      correctAnswer: "Joseph Stalin"
  },
  {
      question: "Em que ano a Segunda Guerra Mundial começou?",
      options: ["1939", "1941", "1945", "1950"],
      correctAnswer: "1939"
  },
  {
      question: "Quem foi a primeira mulher a ganhar um Prêmio Nobel?",
      options: ["Marie Curie", "Rosa Parks", "Margaret Thatcher", "Eleanor Roosevelt"],
      correctAnswer: "Marie Curie"
  },
  {
      question: "Qual foi a capital do Império Inca?",
      options: ["Cuzco", "Lima", "Machu Picchu", "Quito"],
      correctAnswer: "Cuzco"
  },
  {
      question: "Quem foi o primeiro presidente dos Estados Unidos?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
      correctAnswer: "George Washington"
  },
  {
      question: "Qual foi a civilização que habitou a região da Mesopotâmia?",
      options: ["Sumérios", "Persas", "Fenícios", "Hititas"],
      correctAnswer: "Sumérios"
  },
  {
      question: "Quem foi o líder sul-africano que lutou contra o apartheid e se tornou presidente?",
      options: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Steve Biko"],
      correctAnswer: "Nelson Mandela"
  },
  {
      question: "Em que ano a Guerra Civil Americana começou?",
      options: ["1861", "1875", "1889", "1900"],
      correctAnswer: "1861"
  },
  {
      question: "Qual filósofo grego é considerado o pai da Filosofia Ocidental?",
      options: ["Sócrates", "Platão", "Aristóteles", "Heráclito"],
      correctAnswer: "Sócrates"
  },
  {
      question: "Quem foi o líder da Revolução Bolchevique na Rússia?",
      options: ["Lenin", "Trotsky", "Stalin", "Kerensky"],
      correctAnswer: "Lenin"
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
