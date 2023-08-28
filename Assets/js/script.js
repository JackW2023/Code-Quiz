// Getting all the element from the HTML following HTML orders
const scoreBtn = document.querySelector(".score-btn");
// getting the span time
const timeEl = document.getElementById("time");
const startContainer = document.querySelector(".starting-page");
const startBtn = document.getElementById("startbtn");

// thsese are the element in the section
const questionContainer = document.querySelector(".main-display-box");
const questionEl = document.getElementById("question");
const choicesBtn = document.querySelector(".options-btn");
// This is the section element for testing
// for .querySelector I need to add "#" for id, and "." for class in front of it 
const questionContainerSec = document.querySelector(".main-display-boxvsec");

// these are the elements in the footer
const initialEl = document.querySelector(".initial-container");
const initialInput = document.getElementById("initial-input");
const submitBtn = document.querySelector(".submitBtn");

//Testing hide and show functions 
// The ".classList" allows us to manipulate different class features or attributes
// The ".replace" is replacing the element show to hide on main-display-boxvsec
questionContainerSec.classList.replace('show','hide');
// Debugging error forgot the "." in the querySelector parentheses
// console.log(questionContainerSec);



// Declaring variables
// The index is use in the checking and tracking the position of which question it's running
let index = 0;


// this function will be call when we click on the start button after we add an event listener
function generateQuiz() {
    // this if statement will check the user went through all the questions
    // index of the question will start from 0 as in the array count from zero
    // the "questions" variable is not defined in the script.js but it's in the questions.js
    // the reason that we don't have to "import it from question.js it's its's linked in the end of HTML before script.js
    // JavaScript see the questions.js before it runs the script thus I am able to use variable questions 
    if( index === questions.length) {
        // The function will start a series of action after the user went through all the question
        endQuiz();
    }
    // checking to see if it worked
    console.log(index)
    // If the if statement doesn't get trigger it will run the following code
    questionContainer.classList.remove("hide");
    questionContainer.classList.add("show");
    // checking if it worked
    console.log(questionContainer)

}


// Adding an Event listener
// the startBtn is predefined we get the element from the html
// the .addEventListener is a built in methods for js allows users to interact with the elements
// the () => {} is an arrow function
// a regular function could have their own `this` context 
// a arrow function does not hae their own `this context and have to inherit from surrounding functions
// Thus this says when I click the start button add and hide element to start-page class and console log it
// and then call function generateQuiz
startBtn.addEventListener("click",()=>{
    // I am putting a hide element on the startContainer 
    startContainer.classList.add("hide");
    // checking if it worked
    console.log(startContainer);
    // then call 
    generateQuiz();
})