let scores = JSON.parse(localStorage.getItem("highScores")) || []
const scoreList = document.getElementById("score-list")

console.log(scores)
function displayScore() {
    for(let i=0; i < scores.length; i++){
        const li = document.createElement("li")
        li.textContent = `Initials: ${scores[i].initials} Score: ${scores[i].score}`
        scoreList.append(li)
    }
}

displayScore()