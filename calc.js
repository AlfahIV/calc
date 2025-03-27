let displayValue = '';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue[displayValue.length - 1];
    if ('+-×÷'.includes(lastChar)) return; 
    displayValue += operator;
    updateDisplay();
}

function appendDecimal() {
    const parts = displayValue.split(/[\+\-\×\÷]/);
    if (parts[parts.length - 1].includes('.')) return;
    displayValue += '.';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = displayValue.replace(/×/g, '*').replace(/÷/g, '/');
        displayValue = eval(result).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

// Initialize display
updateDisplay();
