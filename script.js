let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
let isOperatorSelected = false;
let isEqualsPressed = false;

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a ,b)
        case '-':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}


function populateDisplay(value) {
    console.log("populateDisplay called with:", value);
    if (isEqualsPressed) {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      displayValue = "";
      isEqualsPressed = false;
    }
  
    if ("0123456789".includes(value)) {
        if (isOperatorSelected) {
          secondNumber += value;
        } else {
          firstNumber += value;
        }
        displayValue += value;
      } else if ("+-×÷".includes(value)) {
        if (firstNumber && operator && secondNumber) {
          let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
          firstNumber = result.toString();
          secondNumber = "";
        }
        operator = value;
        isOperatorSelected = true;
        displayValue += value;
      } else if (value === "=") {
      isEqualsPressed = true;
      if (firstNumber && operator && secondNumber) {
        displayValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
        firstNumber = displayValue;
        secondNumber = "";
        operator = "";
        isOperatorSelected = false;
      }
    }
    updateDisplay();
  }
  

function updateDisplay() {
    console.log("updateDisplay called with:", displayValue);
    const displayElement = document.querySelector(".screen");
    displayElement.innerText = displayValue;
};

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    document.querySelectorAll("button").forEach(function(button) {
        button.addEventListener("click", function(e) { 
            const buttonValue = e.target.innerText;
            populateDisplay(buttonValue);
        });
    });
});