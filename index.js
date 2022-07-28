let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
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
        return `You win!  ${playerSelection} beats ${computerSelection}.`;
    } else if (state == "lose") {
        computerWins = computerWins + 1;
        return `You lose! ${computerSelection} beats  ${playerSelection}.`;
    }else {
        return "You tie!";
    }
}



function game(e) {
    // for (let i = 0; i < 5; i++) {
        // playerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = e.target.id;
        console.log("playerSelection");
        const computerSelection = getComputerChoice();
        let output = playRound(playerSelection, computerSelection);
        // console.log(playRound(playerSelection, computerSelection));
        alert(output);
    //  }

}

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', console.log("sus"));

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', game);
});

// const btnRock = document.querySelector('#rock');

// btnRock.addEventListener('click',() => {
//     alert("Hello");
// });

// const keys = Array.from(document.querySelectorAll('.move'));
// keys.forEach(key => key.addEventListener('click', game));
// window.addEventListener()

