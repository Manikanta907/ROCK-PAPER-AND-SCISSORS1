let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    if (userChoice === computerChoice) {
        ties++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
    } else {
        losses++;
    }

    updateScore();
}

function updateScore() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
    document.getElementById("user-choice").textContent = "Selected";
    document.getElementById("computer-choice").textContent = "Selected";
}
