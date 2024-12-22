let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
  currentNumber += number;
  updateResult(currentNumber);
}

function setOperator(op) {
  if (currentNumber === '') return;
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (previousNumber === '' || currentNumber === '' || operator === '') return;
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
  updateResult(currentNumber);
}

function clearResult() {
  currentNumber = '';
  operator = '';
  previousNumber = '';
  updateResult('');
}

function updateResult(value) {
  document.getElementById('result').value = value;
}
