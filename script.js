let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

function inputNumber(number) {
    if (secondOperand) {
        displayValue = String(number);
        secondOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + number;
    }
    updateDisplay();
}

function inputOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && secondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        displayValue = String(result);
        firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function calculate(first, second, operator) {
    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second;
    } else if (operator === '/') {
        return first / second;
    }
    return second;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculateResult() {
    if (operator && !secondOperand) {
        const inputValue = parseFloat(displayValue);
        const result = calculate(firstOperand, inputValue, operator);
        displayValue = String(result);
        firstOperand = result;
        operator = null;
        secondOperand = true;
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function toggleSign() {
    displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    updateDisplay();
}

function inputPercent() {
    displayValue = String(parseFloat(displayValue) / 100);
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : '0';
    updateDisplay();
}