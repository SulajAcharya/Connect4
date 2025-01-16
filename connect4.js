let val_c1 = 1;
let val_c2 = 1;
let val_c3 = 1;
let val_c4 = 1;
let val_c5 = 1;
let val_c6 = 1;
let val_c7 = 1;
let turn = 1;
let redWins = 0;
let yellowWins = 0;
let currentPlayer = "red"; // Red starts the first game
let lastStartingPlayer = "red"; // To track who started last game

// Function to update the score and whose turn it is
function updateScore() {
    document.getElementById("redScore").innerText = `Red's Score: ${redWins}`;
    document.getElementById("yellowScore").innerText = `Yellow's Score: ${yellowWins}`;
    document.getElementById("whosturn").innerText = `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s Turn`;
}

// Checking the winner
function check(player) {
    setTimeout(() => {
        // Check horizontal
        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player == "red") {
                        redWins++;
                    } else {
                        yellowWins++;
                    }
                    updateScore();
                    resetGame();
                }
            }
        }

        // Check vertical
        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player == "red") {
                        redWins++;
                    } else {
                        yellowWins++;
                    }
                    updateScore();
                    resetGame();
                }
            }
        }

        // Check diagonal /
        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player == "red") {
                        redWins++;
                    } else {
                        yellowWins++;
                    }
                    updateScore();
                    resetGame();
                }
            }
        }

        // Check diagonal \
        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`);
                    if (player == "red") {
                        redWins++;
                    } else {
                        yellowWins++;
                    }
                    updateScore();
                    resetGame();
                }
            }
        }
    }, 200);
}

// Reset the game and start a new round
function resetGame() {
    // Reset column values
    val_c1 = 1;
    val_c2 = 1;
    val_c3 = 1;
    val_c4 = 1;
    val_c5 = 1;
    val_c6 = 1;
    val_c7 = 1;

    // Clear all the cells
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 6; j++) {
            document.getElementById(`c${i}r${j}`).style.backgroundColor = "white";
        }
    }

    // Alternate the starting player
    currentPlayer = (lastStartingPlayer == "red") ? "yellow" : "red";
    lastStartingPlayer = currentPlayer; // Update the last starting player for the next round

    updateScore();
}

// Playing the game
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {
        let sum = eval(`val_${e.id}`);
        eval(`val_${e.id}++`);

        if (sum <= 6) {
            if (currentPlayer == "red") {
                document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red";
                turn++;
                check('red');
                currentPlayer = "yellow";  // Switch player after red's turn
            } else {
                document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow";
                turn++;
                check('yellow');
                currentPlayer = "red";  // Switch player after yellow's turn
            }
            updateScore();
        }
    });
});

// Initialize score and turn
updateScore();

// Reset board confirmation
document.getElementById("reset").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the board? The scores will remain the same, only the board will be reset.")) {
        resetGameBoard();
    }
});

// Restart game confirmation
document.getElementById("restart").addEventListener("click", () => {
    if (confirm("Are you sure you want to restart the game? The board and scores will reset.")) {
        resetGame();
    }
});

// Reset the board only
function resetGameBoard() {
    // Reset column values
    val_c1 = 1;
    val_c2 = 1;
    val_c3 = 1;
    val_c4 = 1;
    val_c5 = 1;
    val_c6 = 1;
    val_c7 = 1;

    // Clear all the cells
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 6; j++) {
            document.getElementById(`c${i}r${j}`).style.backgroundColor = "white";
        }
    }

    updateScore();
}
