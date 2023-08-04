//Timer starts when I select the start button
//Once I answer a question, another one shows up automatically
//The answer is shown correct or incorrect
//When the timer runs out or questions run out the game is over
// I am able to see my score and other highscores and record my initials for the highscores

// global variables
const startButton = document.querySelector('start');
const questionContainer = document.querySelector('question-container');
const questionElement = document.querySelector('question');
const choicesList = document.querySelector('choices');
const endScreen = document.querySelector('end-screen');
const endResult = document.querySelector('end-result');
const countdown = document.querySelector('countdown');

let currentQuestionIndex = 0;
let timeLeft = 75;
let score = 0;

//quiz q's
const questions = [
    {
        question: "Commonly used data strings DO NOT include ___.",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c."
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d."
    },
    {
        question: "Sting values must be enclosed within ___ when being assigned variables",
        choices: ["a. quotes", "b. commas", "c. curly brackets", "d. parenthesis"],
        answer: "a."
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        answer: "d."
    },
    {
        question: "The condition in an if/else statement is enclosed with ___.",
        choices: ["a. quotes", "b. parenthesis", "c. curly brackets", "d. square brackets"],
        answer: "b."
    },

];

// start quiz function
function startQuiz() {
    console.log('Good luck!');
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion();
    startTimer();
}


// show question functions here
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choices.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(index));
        choicesList.appendChild(li);
    });
}




// checks answer func here

function checkAnswer(choiceIndex) {
    const question = questions[currentQuestionIndex];
    if(choiceIndex === question.correctChoice) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect!';
        timeLeft -= 10;
    }
}







// highscore func here?

//event listener to start quiz
startButton.addEventListener('click', startQuiz);