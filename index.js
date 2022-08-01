
const scorePlayer = document.querySelector('#scorePlayer');
const scoreComputer = document.querySelector('#scoreComputer');
const finalMessage = document.querySelector('#finalMessage')

let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // console.log(computerChoice );
    if (computerChoice == 1) {
        return "Rock";
    } else if (computerChoice == 2) {
        return "Paper";
     } else if (computerChoice == 3) {
        return "Scissors";
    } else {
        console.log("Something aint workin")
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    let state = "tie";

    console.log(playerSelection);

    if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            state = "lose";
        } else if (computerSelection == "Scissors") {
            state = "win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            state = "lose";
        } else if (computerSelection == "Rock") {
            state = "win";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            state = "lose";
        } else if (computerSelection == "Paper") {
            state = "win";
        }
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (state == "win") {
        playerWins = playerWins + 1;
        scorePlayer.textContent = playerWins;
        return `You win!  ${playerSelection} beats ${computerSelection}.`;
    } else if (state == "lose") {
        computerWins = computerWins + 1;
        scoreComputer.textContent = computerWins;
        return `You lose! ${computerSelection} beats  ${playerSelection}.`;
    }else {
        finalMessage.textContent = "Tie"
        return "You tie!";
    }
}

function game(e) {
    // console.log("got to game()");
    playerSelection = e.target.parentElement.id;
    // console.log(e.target.id);
    const computerSelection = getComputerChoice();

    if( playerWins + computerWins < 5 ) {
     playRound(playerSelection, computerSelection);
    }else {
        finalMessage.textContent = playerWins > computerWins ? 'You win! Congrats!' : 'yikes, you lose...';
    }

}

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', game);
});