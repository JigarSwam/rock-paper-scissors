// global score variables
let humanScore = 0;
let computerScore = 0;

// get computer's choice and randomly return either "rock" "paper" or "scissors"

function getComputerChoice() {
    let computerChoice;
    let result = Math.floor((Math.random() * 3));
    result === 0 ? computerChoice = "rock" : result === 1 ? computerChoice = "paper" : result === 2 ? computerChoice = "scissors" : ""
    console.log("COMPUTER CHOICE: ", computerChoice);
    return computerChoice;
}

// get human player's choice
// return one of the valid choices depending on what the user inputs

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?").toLowerCase();
    console.log("HUMAN CHOICE: ", humanChoice);
    return humanChoice;
}


// play a single round with two parameters
// humanChoice and computerChoice, use these to take the human and computer choices as args
// write playRound function to console.log as a string value i.e.: "You lose! Paper beats Rock".
// increment humanScore or computerScore variable based on the round winner

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = `Tie Game! You both picked ${humanChoice}`
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    console.log("HUMAN SCORE:", humanScore);
    console.log("COMPUTER SCORE:", computerScore);
    return result;

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// play the entire game
// play 5 rounds in a function called playGame which calls playRound 5 times
