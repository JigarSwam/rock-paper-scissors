let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#btn");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const scoreboard = document.querySelector(".scoreboard");
scoreboard.textContent = `Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`


function getComputerChoice() {
    let computerChoice;
    let result = Math.floor((Math.random() * 3));
    result === 0 ? computerChoice = "rock" : result === 1 ? computerChoice = "paper" : result === 2 ? computerChoice = "scissors" : ""
    return computerChoice;
}

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

function playRound(humanChoice, computerChoice) {
    let roundResult;
    let resultDiv = document.createElement("div");

    if (humanChoice === computerChoice) {
        roundResult = `Tie! You both picked ${humanChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
                humanChoice === "paper" && computerChoice === "rock" || 
                humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundResult = `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
    scoreboard.textContent = `Score: Human: ${humanScore} Computer: ${computerScore}`;
    resultDiv.textContent = roundResult;
    scoreboard.appendChild(resultDiv);
    if (humanScore > 4 || computerScore > 4) {
        rockBtn.removeEventListener("click", () => {
            playRound();
        });
        paperBtn.removeEventListener("click", () => {
            playRound();
        });
        scissorsBtn.removeEventListener("click", () => {
            playRound();
        });
    
        let gameResultDiv = document.createElement("div");
        
        if(humanScore > computerScore) {
            gameResultDiv.textContent = `You've won!\nFinal Score:\n You: ${humanScore}\n Computer: ${computerScore}`;
        } else {
            gameResultDiv.textContent = `You lost :(\nFinal Score:\n You: ${humanScore}\n Computer: ${computerScore}`;
        }
        scoreboard.appendChild(gameResultDiv);
    }
    return roundResult;
}