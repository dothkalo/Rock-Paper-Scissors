const ButtonR = document.querySelector('#ButtonR');
const ButtonP = document.querySelector('#ButtonP');
const ButtonS = document.querySelector('#ButtonS');
const log = document.querySelector('#log');
const scoreBoard = document.querySelector('#scoreBoard');

let humanScore = 0;
let computerScore = 0;

// Event listeners
ButtonP.addEventListener('click', () => playRound("paper", getComputerChoice()));
ButtonR.addEventListener('click', () => playRound("rock", getComputerChoice()));
ButtonS.addEventListener('click', () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = '';
    
    if (humanChoice === computerChoice) {
        resultMessage = `Tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `The computer won! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update log
    log.innerText = resultMessage;
    log.classList.add('update');
    setTimeout(() => log.classList.remove('update'), 400);

    // Update score
    scoreBoard.innerText = `Player: ${humanScore} - Computer: ${computerScore}`;

    // Check for winner
    if (humanScore >= 5) announceWinner("You");
    if (computerScore >= 5) announceWinner("Computer");
}

// Winner announcement
function announceWinner(winner) {
    log.innerText = `${winner} won the game! 🎉`;
    log.classList.add('winner');
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        log.classList.remove('winner');
        scoreBoard.innerText = `Player: ${humanScore} - Computer: ${computerScore}`;
        log.innerText = "Make your move!";
    }, 3000);
}
