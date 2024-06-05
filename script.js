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
                    console.log("You lose! paper beats rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! rock beats scissors.");
                    humanScore++;
                    break;
                default:
                    console.log("This round is a tie.");
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You win, paper beats rock!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You lose! scissors beats paper");
                    computerScore++;
                    break;
                default:
                    console.log("This round is a tie.");
                    break;
            }
            break;    
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You lose! rock beats scissors");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win, scissors beats paper");
                    humanScore++;
                    break;
                default:
                    console.log("This round is a tie.");
                    break;
            } 
            break;   
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());  
    }
    if(computerScore>humanScore) {
        console.log("You lose the computer has donimated. Skynet initiated.");
    }else if(computerScore<humanScore) {
        console.log("You win, John connor.");
    }else if(computerScore===humanScore) {
        console.log("Its a tie, the battle for control continues.");
    }
}

let computerScore = 0;
let humanScore = 0;

playGame();