
let displayValue = '0';

// Função para atualizar o conteúdo do visor
function updateDisplay() {
    
    document.getElementById('display').value = displayValue;
}

// Função para limpar o visor
function clearDisplay() {

    displayValue = '0';

    updateDisplay();
}

// Função para adicionar um dígito ou operador ao visor
function appendToDisplay(value) {

    if (displayValue === '0') {
        displayValue = value;
    } else {

        displayValue += value;
    }
    updateDisplay();
}

// Função para realizar o cálculo quando o botão de igual é pressionado
function calculate() {
    try {
       
        let spacedExpression = displayValue.replace(/([()])/g, ' $1 ');
        displayValue = math.evaluate(spacedExpression).toString();

        updateDisplay();
    } catch (error) {

        displayValue = 'Error';
        updateDisplay();
    }
}

