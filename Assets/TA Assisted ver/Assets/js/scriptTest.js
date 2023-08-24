const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    // Add more questions here
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  const timerElement = document.getElementById("timer");
  
  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let timerInterval;
  
  function showQuestion(questionIndex) {
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimer();
    
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(optionButton);
    });
  
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
    timeLeft--;
  
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      checkAnswer(-1); // Time's up, mark the answer as incorrect
    }
  }
  
  function checkAnswer(selectedIndex) {
    clearInterval(timerInterval);
  
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === -1 || currentQuestion.options[selectedIndex] !== currentQuestion.answer) {
      timeLeft--; // Deduct time for wrong answer
      resultElement.textContent = "Incorrect. The correct answer is: " + currentQuestion.answer;
    } else {
      resultElement.textContent = "Correct!";
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => showQuestion(currentQuestionIndex), 1000);
    } else {
      questionElement.textContent = "Quiz Completed!";
      optionsElement.innerHTML = "";
      submitButton.disabled = true;
    }
  }
  
  showQuestion(currentQuestionIndex);