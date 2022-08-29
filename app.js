let clickedNumber = "";

let firstNumber = "";
let operation = "";
let secondNumber = "";

let operationSign = "";
let result = "";
let isResultInCurrent = false;

const current = document.querySelector(".current");
const currentP = document.querySelector(".current p");
const history = document.querySelector(".history");

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    clickedNumber = this.textContent;

    if (isResultInCurrent) {
      currentP.textContent = "";
      isResultInCurrent = false;
    }

    currentP.textContent += this.textContent;
    operation
      ? (secondNumber += this.textContent)
      : (firstNumber += this.textContent);
    console.log("firstNumber: " + firstNumber);
    console.log("secondNumber: " + secondNumber);
  });
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    operation = this.id;

    operationSign = this.textContent;
    currentP.textContent += operationSign;

    console.log(operation);
  });
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", function () {
  console.log("operation: " + operation);
  result = operate(operation, firstNumber, secondNumber);

  const newHistoryElement = document.createElement("p");
  newHistoryElement.textContent =
    firstNumber + operationSign + secondNumber + "=" + result;
  history.appendChild(newHistoryElement);

  currentP.textContent = result;
  isResultInCurrent = true;

  // scroll history down
  history.scrollTop = history.scrollHeight;

  firstNumber = "";
  secondNumber = "";
  operation = "";
  operationSign = "";
  result = "";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
  clickedNumber = "";
  firstNumber = "";
  operation = "";
  secondNumber = "";
  result = "";

  currentP.textContent = "";
  while (history.hasChildNodes()) {
    history.removeChild(history.lastChild);
  }
});

function operate(operator, num1, num2) {
  return window[operator](num1, num2);
}

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function substract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}
