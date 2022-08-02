const userInput = document.querySelectorAll(".input-el");
const calculateAreaBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

calculateAreaBtn.addEventListener("click", calculateArea);

function calculateArea() {
    multiplicationOfSides = calculateMultiplicationOfSides(Number(userInput[0].value), Number(userInput[1].value))
    
   const area =  1/2*(multiplicationOfSides);

    outputEl.innerText = "Area of Traingle is " + area
  
}

function calculateMultiplicationOfSides(a, b) {
  const multiplicationOfSides = a*b

  return multiplicationOfSides;

}