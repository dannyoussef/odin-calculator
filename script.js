const num1 = 0;
const num2 = 0;
const operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

function clear() {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    displayText.textContent = "0";
  });
}

const displayText = document.querySelector("#display-text");

const number1 = document.querySelector("#number-1");
number1.addEventListener("click", () => {
  displayText.textContent = "1";
});

clear();
