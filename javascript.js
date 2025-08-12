
function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;


    function getComputerChoice() {
        let mates = Math.floor(Math.random() * 3);
        let result = "none";

        if (mates == 0) {
            result = "rock";
        }
        else if (mates == 1) {
            result = "paper";
        }
        else if (mates == 2) {
            result = "scissors";
        }

        return result;
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            log.innerText = `Tie! You both chose ${humanChoice}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            log.innerText = `You won! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            log.innerText = `The computer won! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
    }

    for (let round = 1; round <= 5; round++) {
            let player;
            player = (prompt("Rock Paper Scissors?"));


            while (player === null || player.trim() === "") {
                player = (prompt("Please...Rock Paper Scissors?"));
            }


            player = player.toLowerCase();
            const humanSelection = player;
            const computerSelection = getComputerChoice();

            console.log(`Player: ${humanSelection}`);
            console.log(`Computer: ${computerSelection}`);

            playRound(humanSelection, computerSelection);
            console.log(`${humanScore} - ${computerScore}`);

        }
    

    if (humanScore > computerScore) {
        console.log(`🏆 You won the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Computer won the game! Final score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`🤝 It's a tie! Final score: ${humanScore} - ${computerScore}`);
    }
}

playGame();
