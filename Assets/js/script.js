// Getting all the element from the HTML following HTML orders
const scoreBtn = document.querySelector(".score-btn");
// getting the span time
const timeEl = document.getElementById("time");
const startContainer = document.querySelector("starting page");
const startBtn = document.getElementById("startbtn");
// thsese are the element in the section
const questionContainer = document.querySelector("main-display-box");
const questionEl = document.getElementById("question");
const choicesBtn = document.querySelector("options-btn");
// This is the section element for testing
// for .querySelector I need to add "#" for id, and "." for class in front of it 
const questionContainerSec = document.querySelector(".main-display-boxvsec");
// these are the elements in the footer
const initialEl = document.querySelector("initial-container");
const initialInput = document.getElementById("initial-input");
const submitBtn = document.querySelector("submitBtn");

//Testing hide and show functions 
questionContainerSec.classList.replace('show','hide');

// Debugging error forgot the "." in the querySelector parentheses
console.log(questionContainerSec);



// Declaring variables
// The index is use in the checking and tracking the position of which question it's running
let index = 0;


// this function will be call when we click on the start button after we add an event listener
function generateQuiz (){
    // this if statement will check the user went through all the questions
    // index of the question will start from 0 as in the array count from zero
    // the "questions" variable is not defined in the script.js but it's in the questions.js
    // the reason that we don't have to "import it from question.js it's its's linked in the end of HTML before script.js
    // JavaScript see the questions.js before it runs the script thus I am able to use variable questions 
    if( index === questions.length) {
        // The function will start a series of action after the user went through all the question
        endQuiz();
    }
    // If the if statement doesn't get trigger it will run the following code

}