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
}

let computerScore = 0;
let humanScore = 0;

console.log(getHumanChoice());