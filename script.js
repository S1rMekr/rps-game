let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];
const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("score");

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
