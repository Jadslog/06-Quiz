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
const question = document.querySelector(".question");
 
//Start Button

startQuizBtn.addEventListener("click", () => {
    quizContainer.classList.add("active");
    quizOverlay.classList.add("active");
});

//Next Button 

nextBtn.addEventListener("click", () => {
    quizResultContainer.classList.add("active");
    quizContainer.classList.remove("active");
});

// Close Button

quizCloseBtn.addEventListener("click", () => {
    quizResultContainer.classList.remove("active");
    quizContainer.classList.remove("active");
    quizOverlay.classList.remove("active");
});

// Reatake Quiz Button

retakeQuizBtn.addEventListener("click", () => {
    quizResultContainer.classList.remove("active");
    quizContainer.classList.add("active");
});

// Display Question

const displayQuestions = (qNo) => {
    question.innerText = questions[qNo].question;
}

displayQuestions(2);