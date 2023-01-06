function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    return x === 0 ? "rock"
        : x === 1 ? "paper"
            : x === 2 ? "scissors"
                : "An error has occured";
}

function getPlayerChoice() {
    const x = prompt("Enter rock, paper or scissors: ");
    if (x.toLowerCase() === "rock" || x.toLowerCase() === "paper" || x.toLowerCase() === "scissors") {
        return x;
    } else {
        return console.log(x + " is an incorrect input, please enter rock, paper or scissors");
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    //win
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return console.log("You Win! Rock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return console.log("You Win! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return console.log("You Win! Scissors beats paper!");
    }
    //lose
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return console.log("You Lose! Paper beats rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return console.log("You Lose! Scissors beats paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return console.log("You Lose! Rock beats scissors!");
    } 
    //draw
    else {
        return console.log("Draw!");
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}
