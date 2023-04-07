const startQuizBtn = document.querySelector(".start-quiz-btn");
const quizContainer = document.querySelector(".quiz-container");
const nextBtn = document.querySelector(".next-btn");
const quizResultContainer = document.querySelector(".quiz-result-container");
const quizOverlay = document.querySelector(".quiz-overlay");
const retakeQuizBtn = document.querySelector(".retake-quiz-btn");
const quizCloseBtn = document.querySelector(".quiz-close-btn");
 
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