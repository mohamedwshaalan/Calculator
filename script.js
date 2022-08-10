console.log("Testing");
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let displayValue = '';
let resetScreen = false;

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