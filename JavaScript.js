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
            let playerSelection = button.getAttribute('data-value');
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        });
    });


    // const buttons = document.querySelectorAll(".btn");

    // buttons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //         let buttonValue = "";

    //         if (button.innerHTML.toLowerCase() === "rock") {
    //             buttonValue = "rock";
    //         } else if (button.innerHTML.toLowerCase() === "paper") {
    //             buttonValue = "paper";
    //         } else if (button.innerHTML.toLowerCase() === "scissors") {
    //             buttonValue = "scissors";
    //         }

    //this code is so bad hahahah I can just use buttons.getAttribute but I used a roundabout way, 
    //but not bad in terms of logical thinking with the knowledge I had previously, however not efficient 

    //         return buttonValue;
    //     });
    // });
    
    // let userInput = prompt("Enter rock, paper or scissors: ").toLowerCase();

    // if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    //     return userInput;
    // } else {
    //     console.log(userInput + " is an incorrect input, please enter rock, paper or scissors");
    //     return getPlayerChoice();
    // }
}

function playRound(playerSelection, computerSelection) {

    const plySelection = document.querySelector("div.playerChoice");
    const compSelection = document.querySelector("div.computerChoice");
    const result = document.querySelector("div.result");
    const plyScr = document.querySelector("div.plyScore");
    const compScr = document.querySelector("div.compScore");
    const win = document.querySelector("div.winner");

    let plyScore = 0;
    let compScore = 0;

    plySelection.textContent = "\nPlayer Selection: " + playerSelection;
    compSelection.textContent = "\nComputer Selection: " + computerSelection;

    //win
    if (playerSelection == "rock" && computerSelection == "scissors") {
        result.textContent = "Results: You Win! Rock beats scissors!";
        return plyScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "Results: You Win! Paper beats rock!";
        return plyScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result.textContent = "Results: You Win! Scissors beats paper!";
        return plyScore++;
    }
    //lose
    else if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "Results: You Lose! Paper beats rock!";
        return compScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.textContent = "Results: You Lose! Scissors beats paper!";
        return compScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result.textContent = "Results: You Lose! Rock beats scissors!";
        return compScore++;
    }
    //draw
    else if (playerSelection == "rock" && computerSelection == "rock") {
        result.textContent = "Results: Rock and Rock is a draw!";
        return "draw";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result.textContent = "Results: Paper and Paper is a draw!";
        return "draw";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.textContent = "Results: Scissors and Scissors is a draw!";
        return "draw";
    }
    else {
        console.log("Error occured in play round");
        console.log(playerSelection);
    }

    // //Score tracker
    // plyScr.textContent = plyScore;
    // compScr.textContent = compScore;
    

}



getPlayerChoice();

// function game() {

//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     const startRound = playRound(playerSelection, computerSelection);

//     startRound;

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
// }



// game();




 