// Rock Paper Scissors
// 1. CPU player, returns either 'Rock', 'Paper', or 'Scissors', randomly.
// 2. Human player input, should be read from the console
// 3. Function that takes two inputs, and returns the winner
console.log("Hello World");

function computerPlayer() {
    // Generate random integer [1, 2, 3]
    let randomInt = Math.floor(Math.random() * 3) + 1;
    
    if (randomInt == 1) {
        return "rock";
    } else if (randomInt == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    

}
let playerSelection = "rock";
let computerSelection = computerPlayer();

console.log(playRound(playerSelection, computerSelection));