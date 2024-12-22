// JavaScript to handle the game logic

// Get the HTML elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const gameResultSpan = document.getElementById("game-result");
const restartButton = document.getElementById("restart");

// Choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to get a random choice for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to play the game
function playGame(userChoice) {
  // Get computer's choice
  const computerChoice = getComputerChoice();

  // Display user and computer choices
  userChoiceSpan.textContent = userChoice;
  computerChoiceSpan.textContent = computerChoice;

  // Determine the winner
  const result = determineWinner(userChoice, computerChoice);
  gameResultSpan.textContent = result;

  // Show restart button
  restartButton.style.display = "inline-block";
}

// Add event listeners to the buttons
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

// Restart the game
restartButton.addEventListener("click", () => {
  userChoiceSpan.textContent = "";
  computerChoiceSpan.textContent = "";
  gameResultSpan.textContent = "";
  restartButton.style.display = "none";
});
