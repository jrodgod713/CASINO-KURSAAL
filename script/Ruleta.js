// Obtener elementos
const numbers = document.querySelectorAll('.numbers span');
const betButton = document.getElementById('betButton');
const selectedBetDiv = document.getElementById('selectedBet');
const resultDiv = document.getElementById('result');
const ball = document.getElementById('ball');

// Variable para la apuesta seleccionada
let selectedBet = null;

// Función para manejar la selección de números
numbers.forEach(number => {
    number.addEventListener('click', () => {
        // Remover selección de todos los números
        numbers.forEach(num => num.classList.remove('selected'));
        
        // Marcar el número seleccionado
        number.classList.add('selected');
        selectedBet = number.getAttribute('data-value');
        selectedBetDiv.textContent = `Apuesta seleccionada: ${selectedBet}`;
    });
});

// Función para girar la ruleta
function spinWheel() {
    const winningNumber = Math.floor(Math.random() * 37); // Números entre 0 y 36
    const winningNumberElement = document.querySelector(`.numbers span[data-value="${winningNumber}"]`);
    
    // Mover la bola a la posición correspondiente (para simplificar, solo la posición final se mueve)
    const angle = (winningNumber * 360) / 37; // Divide el círculo en 37 segmentos
    ball.style.transition = 'transform 4s ease-out';
    ball.style.transform = `translate(-50%, -50%) rotate(${angle + 3600}deg)`; // Hacer que gire varias veces

    setTimeout(() => {
        // Mostrar el número ganador
        resultDiv.textContent = `Número ganador: ${winningNumber}`;
        checkBet(winningNumber);
    }, 4000); // Esperar que termine la animación para mostrar el resultado
}

// Función para verificar si la apuesta es ganadora
function checkBet(winningNumber) {
    if (selectedBet === null) {
        resultDiv.textContent += ' ¡No has seleccionado una apuesta!';
    } else if (selectedBet == winningNumber) {
        resultDiv.textContent += ' ¡Felicidades! ¡Ganaste!';
    } else {
        resultDiv.textContent += ' ¡Perdiste! Intenta de nuevo.';
    }
}

// Evento para el botón de apostar
betButton.addEventListener('click', () => {
    if (selectedBet !== null) {
        spinWheel();
    } else {
        resultDiv.textContent = '¡Por favor selecciona una apuesta antes de girar!';
    }
});
