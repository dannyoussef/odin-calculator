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

const displayText = document.querySelector("#display-text");

function clear() {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    displayText.textContent = "";
  });
}

function number0() {
  const num = document.querySelector("#number-0");
  num.addEventListener("click", () => {
    displayText.textContent = "0";
  });
}

function number1() {
  const num = document.querySelector("#number-1");
  num.addEventListener("click", () => {
    displayText.textContent = "1";
  });
}

function number2() {
  const num = document.querySelector("#number-2");
  num.addEventListener("click", () => {
    displayText.textContent = "2";
  });
}

function number3() {
  const num = document.querySelector("#number-3");
  num.addEventListener("click", () => {
    displayText.textContent = "3";
  });
}

function number4() {
  const num = document.querySelector("#number-4");
  num.addEventListener("click", () => {
    displayText.textContent = "4";
  });
}

function number5() {
  const num = document.querySelector("#number-5");
  num.addEventListener("click", () => {
    displayText.textContent = "5";
  });
}

function number6() {
  const num = document.querySelector("#number-6");
  num.addEventListener("click", () => {
    displayText.textContent = "6";
  });
}

function number7() {
  const num = document.querySelector("#number-7");
  num.addEventListener("click", () => {
    displayText.textContent = "7";
  });
}

function number8() {
  const num = document.querySelector("#number-8");
  num.addEventListener("click", () => {
    displayText.textContent = "8";
  });
}

function number9() {
  const num = document.querySelector("#number-9");
  num.addEventListener("click", () => {
    displayText.textContent = "9";
  });
}

clear();
number0();
number1();
number2();
number3();
number4();
number5();
number6();
number7();
number8();
number9();
