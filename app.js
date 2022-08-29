let firstNumber = "";
let secondNumber = "";
let operation = "";
let isCleared = "";
let isLastButtonClickedOperator = false;

const display = document.querySelector(".current p");

setCleared();

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(this.textContent);
    if (isCleared) {
      display.textContent = "";
      isCleared = false;
    }
    if (isLastButtonClickedOperator) {
      display.textContent = "";
      isLastButtonClickedOperator = false;
    }
    display.textContent += this.textContent;
  });
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    firstNumber = display.textContent;
    operation = signToFunction.get(this.textContent);
    isLastButtonClickedOperator = true;
  });
});

const operatorMappings = [
  ["+", "add"],
  ["-", "substract"],
  ["×", "multiply"],
  ["÷", "divide"],
];
const signToFunction = new Map(operatorMappings);
const functionToSign = new Map(
  operatorMappings.map(([key, value]) => [value, key])
);

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", function () {
  secondNumber = display.textContent;
  console.log(`${operation}, ${firstNumber}, ${secondNumber}`);
  result = operate(operation, firstNumber, secondNumber);

  display.textContent = result;

  firstNumber = result;
  secondNumber = "";
  operation = "";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", setCleared());

function setCleared() {
  display.textContent = "0";
  firstNumber = "";
  operation = "";
  secondNumber = "";
  isCleared = true;
}

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
