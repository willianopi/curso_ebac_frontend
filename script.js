// Captura o formulário
const form = document.getElementById('meuForm');

// Captura os campos A e B
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

// Captura o elemento onde exibiremos a mensagem
const mensagemDiv = document.getElementById('mensagem');

// Adiciona um ouvinte de eventos para o envio do formulário
form.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Converte os valores dos campos para números
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    // Verifica se o número B é maior que o número A
    if (valorB > valorA) {
        // Se for válido, exibe uma mensagem positiva
        mensagemDiv.textContent = 'Formulário válido: o número B é maior que o número A.';
        mensagemDiv.style.color = 'green';
    } else {
        // Se for inválido, exibe uma mensagem negativa
        mensagemDiv.textContent = 'Formulário inválido: o número B deve ser maior que o número A.';
        mensagemDiv.style.color = 'red';
    }
});