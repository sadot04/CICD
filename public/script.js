let currentInput = '0';
let prevInput = '';
let operator = null;
let shouldResetScreen = false;

const currentDisplay = document.getElementById('current-display');
const prevDisplay = document.getElementById('prev-operation');

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) calculate();
    prevInput = currentInput;
    operator = op;
    shouldResetScreen = true;
    updateDisplay();
}

function clearCalculator() {
    currentInput = '0';
    prevInput = '';
    operator = null;
    shouldResetScreen = false;
    updateDisplay();
}

function deleteDigit() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

async function calculate() {
    if (operator === null || shouldResetScreen) return;

    const opMap = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide'
    };

    const payload = {
        operation: opMap[operator],
        a: prevInput,
        b: currentInput
    };

    try {
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success) {
            currentInput = data.result.toString();
            prevInput = `${prevInput} ${operator} ${payload.b} =`;
            operator = null;
            shouldResetScreen = true;
            updateDisplay();
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Calculation error:', error);
        alert('Internal server error');
    }
}

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    if (operator) {
        prevDisplay.innerText = `${prevInput} ${operator}`;
    } else {
        prevDisplay.innerText = prevInput;
    }
}
