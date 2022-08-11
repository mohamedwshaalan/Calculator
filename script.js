
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let displayValue = '';
let resetScreen = false;

//Query Selectors
const currentScreen = document.getElementById('current-screen')
const previousScreen = document.getElementById('previous-screen')
const numberButtons = document.querySelectorAll('.number')
const pointButton = document.querySelector('.point')
//Functions
pointButton.addEventListener('click', () => appendPoint());

numberButtons.forEach(button => {
  button.addEventListener('click', () => displayNumber(button.textContent))
})
pointButton

function displayNumber(number) {
  if (currentScreen.textContent === '0' || resetScreen) {
    screenReset();
  }
  currentScreen.textContent += number;
}
function screenReset() {
  currentScreen.textContent = '';
  resetScreen = false;
}
function appendPoint() {
  if (currentScreen.textContent === '0' || resetScreen) {
    screenReset();
  }
  if (currentScreen.textContent.includes('.')) {
    return;
  }
  currentScreen.textContent += '.';
}



function operate(operation, operandone, operandtwo) {

}
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
}
const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (a, b) {
  return Math.pow(a, b);
};
