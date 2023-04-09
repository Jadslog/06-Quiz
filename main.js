// Questions  

const questions = [
    {
        question_id: "0",
        question: "Which of the following is a browswer?",
        options: [
            {option: "Java"},
            {option: "Google Chrome"},
            {option: "Python"},
        ],
        correct_answer: "Google Chrome"
    },
    {
        question_id: "1",
        question: "What is the full form of CPU?",
        options: [
            {option: "Control Processing Unit"},
            {option: "Combined Processing Unit"},
            {option: "Central Processing Unit"},
        ],
        correct_answer: "Central Processing Unit"
    },
    {
        question_id: "2",
        question: "CSS stands for Cascading Styleshet?",
        options: [
            {option: "True"},
            {option: "False"},
        ],
        correct_answer: "True"
    },
]


const startQuizBtn = document.querySelector(".start-quiz-btn");
const quizContainer = document.querySelector(".quiz-container");
const nextBtn = document.querySelector(".next-btn");
const quizResultContainer = document.querySelector(".quiz-result-container");
const quizOverlay = document.querySelector(".quiz-overlay");
const retakeQuizBtn = document.querySelector(".retake-quiz-btn");
const quizCloseBtn = document.querySelector(".quiz-close-btn");
const optionsContainer = document.querySelector(".options-container");
const question = document.querySelector(".question");
const resultHeading = document.querySelector(".result-heading");
const scoreText = document.querySelector(".score-text");

let questionNumber = 0;
let totalQuestion = questions.length;
let userAnwser = "";
let userScore = 0;

const init = () => {
    questionNumber = 0;
    userScore = 0;
    nextBtn.innerText = "Next";
}

//Start Button

startQuizBtn.addEventListener("click", () => {
    init();
    quizContainer.classList.add("active");
    quizOverlay.classList.add("active");
    displayQuestions(questionNumber);
});

//Next Button 

nextBtn.addEventListener("click", () => {
    checkAnswer();
    questionNumber++;
    if (questionNumber == totalQuestion - 1){
        nextBtn.innerText = "Finish"
    }
    if (questionNumber < totalQuestion){
        displayQuestions(questionNumber);
    }else {
        quizResultContainer.classList.add("active");
        showResult();
        quizContainer.classList.remove("active");
    }
});

// Close Button

quizCloseBtn.addEventListener("click", () => {
    quizResultContainer.classList.remove("active");
    quizContainer.classList.remove("active");
    quizOverlay.classList.remove("active");
});

// Reatake Quiz Button

retakeQuizBtn.addEventListener("click", () => {
    init();
    quizResultContainer.classList.remove("active");
    quizContainer.classList.add("active");
    displayQuestions(questionNumber);
});

// Store Answer

const storeAnwser = (o) => {
    if (o){
        userAnwser = o.target.nextElementSibling.innerText;
        console.log("user " + userAnwser);
    }else {
        userAnwser = "";
    }
}

// Check Answer 

const checkAnswer = () => {
    if (userAnwser == questions[questionNumber].correct_answer){
        userScore++;
    }
}


// Display Question

const displayQuestions = (qNo) => {
    question.innerText = questions[qNo].question;

    optionsContainer.innerText = "";

    questions[qNo].options.forEach((o, oIndex) => {
        const optionRadioButton = document.createElement("input");
        optionRadioButton.type = "radio";
       
        let optionId = "option" + oIndex;
        optionRadioButton.id = optionId;
        optionRadioButton.name = "option";
        optionRadioButton.addEventListener("change",storeAnwser);
        
        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = optionId;
        optionLabel.classList.add("option");
        optionLabel.innerText = o.option;

        optionsContainer.appendChild(optionRadioButton);
        optionsContainer.appendChild(optionLabel);
    }); 
}

displayQuestions(questionNumber);

// Show the Result

const showResult = () => {
    let percentage = (userScore/totalQuestion) * 100;

    if (percentage >= 60) {
        resultHeading.innerText = "Congratulations!";
    } else {
        resultHeading.innerText = "You can do better";
    }

    scoreText.innerText = `You have scored ${userScore} out of ${totalQuestion}.`;  
}