// Archivo script.js

document.addEventListener("DOMContentLoaded", () => {
    const playerCards = document.getElementById("player-cards");
    const dealerCards = document.getElementById("dealer-cards");
    const playerPoints = document.getElementById("player-points");
    const dealerPoints = document.getElementById("dealer-points");
    const status = document.getElementById("status");
    const betInput = document.getElementById("bet");

    const hitButton = document.getElementById("hit");
    const standButton = document.getElementById("stand");
    const restartButton = document.getElementById("restart");

    let playerData = { cards: [], points: 0, bet: 0 };
    let dealerData = { cards: [], points: 0 };

    // Functions to update UI
    const updateUI = () => {
        playerCards.innerHTML = playerData.cards.join(", ");
        dealerCards.innerHTML = dealerData.cards.join(", ");
        playerPoints.innerText = playerData.points;
        dealerPoints.innerText = dealerData.points;
    };

    // Simulate game actions
    const drawCard = () => Math.floor(Math.random() * 10) + 1;

    const playerHit = () => {
        const card = drawCard();
        playerData.cards.push(card);
        playerData.points += card;
        updateUI();

        if (playerData.points > 21) {
            status.innerText = "Te pasaste de 21. Pierdes la apuesta.";
            hitButton.disabled = true;
            standButton.disabled = true;
        }
    };

    const dealerPlay = () => {
        while (dealerData.points < 17) {
            const card = drawCard();
            dealerData.cards.push(card);
            dealerData.points += card;
        }
        updateUI();

        if (dealerData.points > 21 || playerData.points > dealerData.points) {
            status.innerText = "¡Ganaste la apuesta!";
        } else if (playerData.points === dealerData.points) {
            status.innerText = "Es un empate.";
        } else {
            status.innerText = "Perdiste la apuesta.";
        }
    };

    const restartGame = () => {
        playerData = { cards: [], points: 0, bet: 0 };
        dealerData = { cards: [], points: 0 };
        status.innerText = "";
        updateUI();
        hitButton.disabled = false;
        standButton.disabled = false;
    };

    // Event listeners
    hitButton.addEventListener("click", playerHit);
    standButton.addEventListener("click", dealerPlay);
    restartButton.addEventListener("click", restartGame);
});
