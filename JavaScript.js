function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    return x === 0 ? "rock"
        : x === 1 ? "paper"
            : x === 2 ? "scissors"
                : "An error has occured";
}

function getPlayerChoice() {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let buttonValue = "";

            if (button.innerHTML.toLowerCase() === "rock") {
                buttonValue = "rock";
            } else if (button.innerHTML.toLowerCase() === "paper") {
                buttonValue = "paper";
            } else if (button.innerHTML.toLowerCase() === "scissors") {
                buttonValue = "scissors";
            }

            return buttonValue;
        });
    });
    
    // let userInput = prompt("Enter rock, paper or scissors: ").toLowerCase();

    // if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    //     return userInput;
    // } else {
    //     console.log(userInput + " is an incorrect input, please enter rock, paper or scissors");
    //     return getPlayerChoice();
    // }
}

function playRound(playerSelection, computerSelection) {
    //win
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats scissors!");
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats rock!");
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats paper!");
        return "win";
    }
    //lose
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats rock!");
        return "lose";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats paper!");
        return "lose";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats scissors!");
        return "lose";
    }
    //draw
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Rock and Rock is a draw!");
        return "draw";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Paper and Paper is a draw!");
        return "draw";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Scissors and Scissors is a draw!");
        return "draw";
    }
    else {
        console.log("Error occured in play round");
        console.log(playerSelection);
    }

}

function game() {

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const startRound = playRound(playerSelection, computerSelection);

    startRound;

    // let winTracker = 0;
    // let loseTracker = 0;
    // let drawTracker = 0;

    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = getPlayerChoice();
    //     const computerSelection = getComputerChoice();
    //     const startRound = playRound(playerSelection, computerSelection);

    //     startRound;

    //     if (startRound === "win") {
    //         winTracker++;
    //     } else if (startRound === "lose") {
    //         loseTracker++;
    //     } else if (startRound === "draw") {
    //         drawTracker++;
    //     } else {
    //         console.log("An error occurred while tracking the score")
    //     }
    // }

    // console.log("Score: Win - " + winTracker + " Lose - " + loseTracker + " Draw - " + drawTracker);
    // winTracker = 0;
    // loseTracker = 0;
    // drawTracker = 0;
}



game();

