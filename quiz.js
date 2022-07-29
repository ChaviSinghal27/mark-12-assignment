const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle"];

submitButton.addEventListener("click", calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm)
    for(let value of formResults.values()) {
     if(value === correctAnswers[index]){
        score = score + 1 ;
     } 

     index = index + 1 ;
    
} 
  outputEl.innerText = "your score is " + score ;
}

