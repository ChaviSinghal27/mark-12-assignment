const sidesInput = document.querySelectorAll(".input-el");
const checkButton = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

checkButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
    const sumOfSides = calculateSumOfSides(Number(sidesInput[0].value), Number(sidesInput[1].value))

    const lengthOfHypotenuse = Math.sqrt(sumOfSides);
    outputEl.innerText = "length of hypotenuse is " + lengthOfHypotenuse; 
}


function calculateSumOfSides(a, b) {
    const sumOfSides = a*a + b*b;
  
    return sumOfSides;
}
    