const angleInput = document.querySelectorAll(".input-el");
const checkButton = document.querySelector("#submit-btn");
const outputEl =document.querySelector("#output");


checkButton.addEventListener("click", isTriangle);



function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;
    
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
   
    if(sumOfAngles === 180) {

        outputEl.innerText = "yay this is a triangle"

    } else {
                 outputEl.innerText = "No this is not a triangle"
    }
}







