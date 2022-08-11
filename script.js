
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let displayValue = '';
let resetScreen = false;

//Query Selectors
const currentScreen = document.getElementById('current-screen')
const previousScreen = document.getElementById('previous-screen')
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.arithmetic')
const pointButton = document.querySelector('.point')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const equalsButton = document.getElementById('equal')
//Functions
window.addEventListener('keydown', keyboardInput)
pointButton.addEventListener('click', appendPoint);
deleteButton.addEventListener('click', deletefunc);
clearButton.addEventListener('click', clearfunc);
equalsButton.addEventListener('click', evaluate);

numberButtons.forEach(button => {
  button.addEventListener('click', () => displayNumber(button.textContent))
})
operationButtons.forEach(button => {
  button.addEventListener('click', () => setOperation(button.textContent))
})

function displayNumber(number) {
  if (currentScreen.textContent === '0' || resetScreen) {
    screenReset();
  }
  currentScreen.textContent += number;
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
function screenReset() {
  currentScreen.textContent = '';
  resetScreen = false;
}
function clearfunc() {
  currentScreen.textContent = '0';
  previousScreen.textContent = '';
  currentOperator = null;
  firstOperand = '';
  secondOperand = '';

}
function deletefunc() {
  currentScreen.textContent = (currentScreen.textContent).toString().slice(0, -1);
}
function keyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) { displayNumber(e.key) }
  if (e.key === '.') { appendPoint() }
  if (e.key === 'Backspace') { deletefunc() }
  if (e.key === 'Escape') { clearfunc() }
  if (e.key === '*' || e.key === '/' || e.key === '+' || e.key === '-' || e.key === '%' || e.key === '^') {
    setOperation(e.key);
  }
  if (e.key === '=') { evaluate() }
}
function setOperation(operation) {
  if (currentOperator !== null) { evaluate() }
  firstOperand = currentScreen.textContent;
  currentOperator = operation;
  previousScreen.textContent = `${firstOperand} ${currentOperator}`;
  resetScreen = true;

}


function evaluate() {
  if (currentOperator === null || resetScreen) { return }
  if (currentOperator === '/' && currentScreen.textContent === '0') {
    alert('Math Error')
    return;
  }
  secondOperand = currentScreen.textContent;
  previousScreen.textContent = `${firstOperand}${currentOperator}${secondOperand}`
  currentScreen.textContent = operate(currentOperator, firstOperand, secondOperand);
  currentOperator = null;
}




function operate(operation, operandone, operandtwo) {
  operandone = Number(operandone);
  operandtwo = Number(operandtwo);
  if (operation === '+') {
    return add(operandone, operandtwo);
  }
  if (operation === '-') {
    return subtract(operandone, operandtwo);
  }
  if (operation === '/') {
    return divide(operandone, operandtwo);
  }
  if (operation === '*') {
    return multiply(operandone, operandtwo);
  }
  if (operation === '^') {
    return power(operandone, operandtwo);
  }
  if (operation === '%') {
    return mod(operandone, operandtwo);
  }

  return null;
}

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};
function divide(a, b) {
  return a / b;
}


function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return Math.pow(a, b);
};
function mod(a, b) {
  return a % b;
}
