
let display = document.getElementById('display');
let expression = '';

function appendSymbol(symbol) {
    if (expression.length >= 20) return;
    expression += symbol;
    display.textContent = expression;
}

function clearDisplay() {
    expression = '';
    display.textContent = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.textContent = expression || '0';
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.textContent = expression;
    } catch {
        display.textContent = 'Error';
        expression = '';
    }
}
