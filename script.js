

function getComputerChoice() {
    let randomNum = Math.random();
    let choice = "scissors";
    if (randomNum < 0.33) {
        choice = "paper";
    }
    if (randomNum >= 0.33 && randomNum < 0.66) {
        choice = "rock";
    }
    console.log(`The computer chose: ${choice}`);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    if (lowerPlayerSelection == computerSelection) {
        return `You both played ${lowerPlayerSelection}, so it's a draw! Play another round?`;
    }
    if (lowerPlayerSelection == "scissors" &&               computerSelection == "paper") {
        return "You win! Scissors beats paper!" ;
    }

    if (lowerPlayerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors!";
    }

    if (lowerPlayerSelection == "paper" && computerSelection == "rock") {
        return "You win! paper beats rock!";
    }

    if (lowerPlayerSelection == "paper" &&  computerSelection == "scissors") {
        return "You lose! Scissors beats paper!";
    }

    if (lowerPlayerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    }
    if (lowerPlayerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    }
}

function game() {

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one: Rock, paper or scissors?");
        let winOrLose = playRound(playerSelection, getComputerChoice());
        console.log(winOrLose);
        if (winOrLose.slice(3,7) == 'win') {
            playerWins++;
        }
        else {
            computerWins++;
        }
    }

    if (playerWins == computerWins) {
        console.log("The match was a draw!")
    }

    if (playerWins > computerWins) {
        console.log("Congratulations! You won the match!");
    }

    else {
        console.log("Oh no! The computer beat you!");
    }
}
