// Getting all the element from the HTML following HTML orders
const scoreBtn = document.querySelector(".score-btn");
// getting the span time
const timeEl = document.getElementById("time");
const startContainer = document.querySelector(".starting-page");
const startBtn = document.getElementById("startbtn");

// thsese are the element in the section
const questionContainer = document.querySelector(".main-display-box");
const questionEl = document.getElementById("questions");
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
    // questionContainer.classList.remove("hide");
    questionContainer.classList.add("show");
    // checking if it worked
    console.log(questionContainer);

    // This line of code should display the questions in the main-display-box as p tag in HTML which I got and const it as questionEl
    // questionEl = the const I declared retrieving the HTML
    // textContent = replacing the the text in the questionEl with question
    // question[index] = this is pointing at which question js is getting in this case I set it to 0 switch is the first one cuz it start with 0
    // .question = is the element in the object with I defined in questions.js
    // because the question.js was ran before script js know the const questions exist
    // This line ultimately will run through all the question
    questionEl.textContent = questionsList[index].question;
    // The choiceBtn was declare and I retrieve the choice buttons placeholder from the HTML
    // The .innerHTML property will set or get the HTML content within the element
    // When the .innerHTML is assign a string it will replace the existing HTML contents
    // Here I set the choicesBtn to an empty string thus it will clear out the option buttons 
    choicesBtn.innerHTML = "";

    // This For loop will ensure my code generates choices in button formate
    // for this for loop I set i equal to zero
    // when i is less than the current question's, 
    // which determined by the "index" and was declare starting from zero,  
    // "choice", "length" run through the for loop and increase i by one which is the i++
    // The reason I need to add an .length instead of just targeting the choice is because
    // The .length will turn this into numeric value and the center condition for "for" loop is boolean thus numeric value is easier to debug
    for( let i = 0; i < questionsList[index].choices.length; i++ ) {
        // Once it pass the condition I first need to create the buttons
        // I const and placeholderButton where the button that holds the choices will be created
        // The "document" is a global object that allows developer interacts with and get or manipulates element 
        // The .createElement method is used to create HTML element in Js
        // I am creating an buttons thus I pass in "Button" in the Parentheses 
        const placeHolderBtn = document.createElement("button");
        // Next I added attributes to the button tags 
        // placeholderBtn was pre-declare constant
        // the .setAttribute method is use for adding new attribute to HTML
        // The .setAttribute could take in two arguments 
            // 1. The type of the attribute you want to set it to standard term in HTML such as "class", "href"
            // 2. The name of the selected attribute you set it to 
        // In this case I set the attribute of placeholderBtn which are the buttons tag to choice-btn
        placeHolderBtn.setAttribute("class","choice-btn");
        // checking if it worked
        // for here event though I haven't get to replacing the text content for buttons with choices
            //  but I use questionsList[index].choices.length as the for loop condition thus js know that the buttons name
        console.log(placeHolderBtn);
        // Then, I retrieve the choice options from the questions.js and place each options into one of the buttons
            // The placeHolderBtn is pre-defined constant in this for loop
            // The .textContent is getting or setting or replacing text contents with the text I provide
                // In this case I'm just setting placeHolder which are the buttons to choices in the questionList in questions.js
            // The questionList is the constant in the question.js file which I added at the bottom of the index.html before script.js so I could use it 
            // The [index] is pointing at which set of questions or Objects are we looking for starting from 0 the beginning.
            // The .choices is pointing at the choices section of the object and getting the elements
            // The [i] is pointing at which string are we getting starting from the right to left 
            // Normally Code always reads from left to right top to bottom  
        placeHolderBtn.textContent = questionsList[index].choices[i]
        // checking if it worked
        console.log(placeHolderBtn);
        // Finally, I append the placeHolderBtn 
            // which now holds all the choices that formatted into button form on to the choiceBtn
            // which I declare constant and getting it from div that has an class attribute of "options-btn" on the html page
        // PlaceHolderBtn which I declare an constant in this function
        // The .append adds the newly created placeHolderBtn element as a child to the end of choiceBtn 
        // The choiceBtn is an constant I declared which is getting the element "options-btn" on the html page 
        choicesBtn.append(placeHolderBtn)
    }


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