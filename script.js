let num1 = 0;
let num2 = 0;
let operator = "";
const displayText = document.querySelector("#display-text");

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
    displayText.textContent = "";
  });
}

function number0() {
  const num = document.querySelector("#number-0");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "0";
    }
  });
}

function number1() {
  const num = document.querySelector("#number-1");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "1";
    }
  });
}

function number2() {
  const num = document.querySelector("#number-2");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "2";
    }
  });
}

function number3() {
  const num = document.querySelector("#number-3");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "3";
    }
  });
}

function number4() {
  const num = document.querySelector("#number-4");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "4";
    }
  });
}

function number5() {
  const num = document.querySelector("#number-5");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "5";
    }
  });
}

function number6() {
  const num = document.querySelector("#number-6");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "6";
    }
  });
}

function number7() {
  const num = document.querySelector("#number-7");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "7";
    }
  });
}

function number8() {
  const num = document.querySelector("#number-8");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "8";
    }
  });
}

function number9() {
  const num = document.querySelector("#number-9");
  num.addEventListener("click", () => {
    if (displayText.textContent.length == 10) {
      return;
    } else {
      displayText.textContent += "9";
    }
  });
}

function addBtn() {
  const add = document.querySelector("#add-sign");
  add.addEventListener("click", () => {
    displayText.textContent += "+";
  });
}

function addBtn() {
  const add = document.querySelector("#add-sign");
  add.addEventListener("click", () => {
    displayText.textContent += "+";
  });
}

function subtractBtn() {
  const subtract = document.querySelector("#subtract-sign");
  subtract.addEventListener("click", () => {
    displayText.textContent += "-";
  });
}

function divideBtn() {
  const divide = document.querySelector("#divide-sign");
  divide.addEventListener("click", () => {
    displayText.textContent += "/";
  });
}

function multiplyBtn() {
  const multiply = document.querySelector("#multiply-sign");
  multiply.addEventListener("click", () => {
    displayText.textContent += "*";
  });
}

function negateBtn() {
  const negate = document.querySelector("#negate-sign");
  negate.addEventListener("click", () => {
    displayText.textContent.padStart;
  });
}

function calculate() {
  const calculate = document.querySelector("#equal-sign");
  calculate.addEventListener("click", () => {
    let numArray = displayText.textContent.split(/[*+-/]/);
    let result = null;
    if (numArray[1] == null) {
      return;
    }
    num1 = parseInt(numArray[0]);
    num2 = parseInt(numArray[1]);

    if (displayText.textContent.includes("+")) {
      operator = "+";
    } else if (displayText.textContent.includes("-")) {
      operator = "-";
    } else if (displayText.textContent.includes("*")) {
      operator = "*";
    } else if (displayText.textContent.includes("/")) {
      operator = "/";
    }
    result = operate(operator, num1, num2);
    displayText.textContent = result;
  });
}

calculate();
clear();
addBtn();
subtractBtn();
multiplyBtn();
divideBtn();
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
