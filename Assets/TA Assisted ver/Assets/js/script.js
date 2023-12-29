const startContainer = document.querySelector(".start-container");
const startBtn = document.getElementById("startbtn");
const questionContainer = document.querySelector(".question-container");
const timeEl = document.getElementById("time");
const questionEl = document.getElementById("questions");
const btnList = document.querySelector(".btn-list");
const initialEl = document.querySelector(".initial-container")
const submitBtn = document.querySelector("#submitbtn")
const initialInput = document.getElementById("initial-input")
// Tracking the question
let index = 0;
let timer;
let time = 61;
let score = 0;
let scoreArray = []

function startQuiz() {
    if (index === questions.length) {
        endQuiz()
        return;
    }
    questionContainer.classList.replace("hide", "show")
    questionEl.textContent = questions[index].question
    // input or take out something into HTML
    btnList.innerHTML = ""

    for (let i = 0; i < questions[index].answers.length; i++) {
        const btn = document.createElement("button")
        btn.setAttribute("class", "answer-btn")
        btn.textContent = questions[index].answers[i]
        btnList.append(btn)
    }
}

function startTimer() {
    timer = setInterval(function () {
        time--
        timeEl.textContent = time
        if (time == 0) {
            endQuiz()
        }
    }, 1000)
}

function checkAnswers(answer) {
    if (answer === questions[index].correct) {
        index++
        score++
        startQuiz()
    } else {
        index++
        startQuiz()
        time -= 5
    }
}

function endQuiz() {
    clearInterval(timer)
    questionContainer.style.display = "none"
    initialEl.classList.replace("hide", "show")
}


startBtn.addEventListener("click", () => {
    startContainer.classList.add("hide")
    startQuiz()
    startTimer()
})

btnList.addEventListener("click", () => {
    const userChoice = this.event.target.textContent
    checkAnswers(userChoice)
})

submitBtn.addEventListener("click", () => {
    if (initialInput !== "") {
        scoreArray = JSON.parse(localStorage.getItem("highScores")) || []
        const userInitial = initialInput.value.trim()
        const userDetail = {
            initials: userInitial,
            score: score

        }
        scoreArray.push(userDetail)
        localStorage.setItem("highScores", JSON.stringify(scoreArray))
    }
})