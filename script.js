function checkChoiceAddress(rps) {
    switch(rps) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getComputerChoice() {
    let choiceAddress = Math.floor(Math.random() * 3);
    return checkChoiceAddress(choiceAddress);
}

function getHumanChoice() {
    return prompt("Choose your weapon").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    statusContainer.textContent = "You lose! paper beats rock.";
                    computerScore++;
                    break;
                case "scissors":
                    statusContainer.textContent = "You win! rock beats scissors.";
                    humanScore++;
                    break;
                default:
                    statusContainer.textContent = "This round is a tie.";
                    break;
            }
            displayScore();
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    statusContainer.textContent = "You win, paper beats rock!";
                    humanScore++;
                    break;
                case "scissors":
                    statusContainer.textContent = "You lose! scissors beats paper";
                    computerScore++;
                    break;
                default:
                    statusContainer.textContent = "This round is a tie.";
                    break;
            }
            displayScore();
            break;    
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    statusContainer.textContent = "You lose! rock beats scissors";
                    computerScore++;
                    break;
                case "paper":
                    statusContainer.textContent = "You win, scissors beats paper";
                    humanScore++;
                    break;
                default:
                    statusContainer.textContent = "This round is a tie.";
                    break;
            } 
            displayScore();
            break;   
    }
}

function displayScore() {
    scoreContainer.textContent = `THE MATRIX: ${computerScore}  YOU: ${humanScore}`;
    if (computerScore === 5) {
        scoreContainer.textContent = "The computer took over after five battles";
        scoreContainer.appendChild(playAgain);
    }else if (humanScore === 5) {
        scoreContainer.textContent = "You gained freedom after five battles, humanity is free.";
        scoreContainer.appendChild(playAgain);
    }
}

function play() {
    computerScore = 0;
    humanScore = 0;
    statusContainer.textContent = "NEW ROUND";
}


let computerScore = 0;
let humanScore = 0;


const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const statusContainer = document.createElement("div");
const scoreContainer = document.createElement("div");
const buttons = document.querySelector(".buttons");
const results = document.querySelector(".results");
const playAgain = document.createElement("button");

rockButton.classList.toggle("rockButton");
paperButton.classList.toggle("paperButton");
scissorsButton.classList.toggle("scissorsButton");
statusContainer.classList.toggle("info");
scoreContainer.classList.toggle("scores");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
playAgain.textContent = "PLAY AGAIN";

buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);
results.appendChild(statusContainer);
results.appendChild(scoreContainer);

rockButton.addEventListener("click", () => {playRound("rock", getComputerChoice())});
paperButton.addEventListener("click", () => {playRound("paper", getComputerChoice())});
scissorsButton.addEventListener("click", () => {playRound("scissors", getComputerChoice())});
playAgain.addEventListener("click", play);