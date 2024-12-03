const symbols = ['7', '🍒', '🍀', '🍋', '🍊'];

function spin(machineId) {
  // Cambiar los resultados aleatorios de las tragamonedas
  const reels = document.querySelectorAll(`#${machineId} .reel`);
  const resultDisplay = document.getElementById(`result${machineId.slice(-1)}`);

  reels.forEach((reel, index) => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    reel.textContent = randomSymbol;
  });

  // Comprobar si hay coincidencias
  const resultSymbols = Array.from(reels).map(reel => reel.textContent);
  if (resultSymbols.every(symbol => symbol === resultSymbols[0])) {
    resultDisplay.textContent = `¡Ganaste! ${resultSymbols[0]} en línea!`;
  } else {
    resultDisplay.textContent = 'Inténtalo de nuevo...';
  }
}
