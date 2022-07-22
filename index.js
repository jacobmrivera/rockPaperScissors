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