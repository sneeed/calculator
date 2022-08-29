let clickedNumber = "";

const current = document.querySelector(".current");
let currentText = current.textContent;

const buttons = document.querySelectorAll(".number-button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    clickedNumber = this.textContent;

    const p = document.querySelector(".current p");
    p.textContent += this.textContent;
  });
});

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
