'use strict';

// --- DOM Elements ---
const score0El = document.getElementById('score-0');
const score1El = document.getElementById('score-1');
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
// Get both dice elements and their faces
const dice1El = document.getElementById('dice-1');
const diceFace1El = document.getElementById('dice-face-1');
const dice2El = document.getElementById('dice-2');
const diceFace2El = document.getElementById('dice-face-2');
const rollButton = document.getElementById('roll-button');
const newGameButton = document.getElementById('new-game-button');
const turnIndicatorEl = document.getElementById('turn-indicator');
const winnerMessageEl = document.getElementById('winner-message');
const rollResultEl = document.getElementById('roll-result');

// --- Game State Variables ---
let scores, currentPlayer, gamePlaying, winningScore;
const diceFaces = ['?', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; // Unicode dice faces

// --- Functions ---

// Initialize the game / Reset
const initGame = () => {
    scores = [0, 0];
    currentPlayer = 0;
    gamePlaying = true;
    winningScore = 100;

    // Reset UI
    score0El.textContent = 0;
    score1El.textContent = 0;
    // Reset both dice faces
    diceFace1El.textContent = '?';
    diceFace2El.textContent = '?';
    // Ensure rolling animation is off for both dice
    dice1El.classList.remove('rolling');
    dice2El.classList.remove('rolling');
    winnerMessageEl.textContent = '';
    rollResultEl.textContent = 'Roll the dice!';
    turnIndicatorEl.textContent = "Player 1's Turn";

    // Reset player visual states
    player0El.classList.add('active');
    player1El.classList.remove('active');
    player0El.classList.remove('winner');
    player1El.classList.remove('winner');

    // Enable roll button
    rollButton.disabled = false;
};

// Switch to the next player
const switchPlayer = () => {
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    turnIndicatorEl.textContent = `Player ${currentPlayer + 1}'s Turn`;
};

// Handle Dice Roll Action
const handleRollDice = () => {
    if (!gamePlaying) return;

    // 1. Start the rolling animation for BOTH dice
    dice1El.classList.add('rolling');
    dice2El.classList.add('rolling');
    rollButton.disabled = true;
    diceFace1El.textContent = '?'; // Show question mark during animation
    diceFace2El.textContent = '?';
    rollResultEl.textContent = 'Rolling...';

    // 2. Generate random dice rolls (after a short delay)
    setTimeout(() => {
        const diceRoll1 = Math.floor(Math.random() * 6) + 1;
        const diceRoll2 = Math.floor(Math.random() * 6) + 1;
        const totalRoll = diceRoll1 + diceRoll2; // Calculate the sum

        // 3. Stop rolling animation & display results for BOTH dice
        dice1El.classList.remove('rolling');
        dice2El.classList.remove('rolling');
        diceFace1El.textContent = diceFaces[diceRoll1];
        diceFace2El.textContent = diceFaces[diceRoll2];
        rollResultEl.textContent = `Rolled ${diceFaces[diceRoll1]} (${diceRoll1}) and ${diceFaces[diceRoll2]} (${diceRoll2}). Total: ${totalRoll}!`;

        // 4. Update current player's score with the TOTAL roll
        scores[currentPlayer] += totalRoll;
        document.getElementById(`score-${currentPlayer}`).textContent = scores[currentPlayer];

        // 5. Check if player won
        if (scores[currentPlayer] >= winningScore) {
            gamePlaying = false;
            winnerMessageEl.textContent = `🎉 Player ${currentPlayer + 1} Wins! 🎉`;
            document.querySelector(`.player-${currentPlayer}`).classList.add('winner');
            document.querySelector(`.player-${currentPlayer}`).classList.remove('active');
            rollButton.disabled = true;
            turnIndicatorEl.textContent = "Game Over!";
        } else {
            // 6. If no winner, switch player
            switchPlayer();
            rollButton.disabled = false; // Re-enable button for next player
        }

    }, 500); // Match CSS animation duration
};

// --- Event Listeners ---
rollButton.addEventListener('click', handleRollDice);
newGameButton.addEventListener('click', initGame);

// --- Initial Game Setup ---
initGame();