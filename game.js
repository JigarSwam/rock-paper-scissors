
function getComputerChoice() {
    let computerChoice;
    let result = Math.floor((Math.random() * 3));
    result === 0 ? computerChoice = "rock" : result === 1 ? computerChoice = "paper" : result === 2 ? computerChoice = "scissors" : ""
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?").toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result;
        if (humanChoice === computerChoice) {
            console.log(`Tie! You both picked ${humanChoice}`);
        } else if (humanChoice === "rock" && computerChoice === "scissors" || 
                    humanChoice === "paper" && computerChoice === "rock" || 
                    humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        }
        return result;
    }

    for(let i = 1; i < 6; i++) {
        console.log("ROUND", i);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        console.log(`You've won!\nFinal Score:\n You: ${humanScore}\n Computer: ${computerScore}`);
    } else if (humanScore == computerScore) {
        console.log(`Tie Game!\nFinal Score:\n You: ${humanScore}\n Computer: ${computerScore}`)
    } else {
        console.log(`You lost :(\nFinal Score:\n You: ${humanScore}\n Computer: ${computerScore}`)
    }

}

playGame();