// Variável para armazenar o valor exibido no visor da calculadora
let displayValue = '0';

// Função para atualizar o conteúdo do visor
function updateDisplay() {
    // Obtém o elemento do visor pelo ID e define seu valor como o valor atual
    document.getElementById('display').value = displayValue;
}

// Função para limpar o visor
function clearDisplay() {
    // Define o valor do visor como '0'
    displayValue = '0';
    // Atualiza o visor
    updateDisplay();
}

// Função para adicionar um dígito ou operador ao visor
function appendToDisplay(value) {
    // Se o valor atual no visor for '0', substitua-o pelo novo valor
    if (displayValue === '0') {
        displayValue = value;
    } else {
        // Caso contrário, adicione o novo valor ao valor existente
        displayValue += value;
    }
    // Atualiza o visor
    updateDisplay();
}

// Função para realizar o cálculo quando o botão de igual é pressionado
function calculate() {
    try {
        // Adiciona um espaço antes e depois dos parênteses para garantir a correta separação
        let spacedExpression = displayValue.replace(/([()])/g, ' $1 ');
        // Usa a função evaluate da Math.js para avaliar a expressão no visor
        displayValue = math.evaluate(spacedExpression).toString();
        // Atualiza o visor com o resultado do cálculo
        updateDisplay();
    } catch (error) {
        // Se houver um erro durante a avaliação, exibe "Error" no visor
        displayValue = 'Error';
        // Atualiza o visor
        updateDisplay();
    }
}

