// Rock Paper Scissors
// 1. CPU player, returns either 'Rock', 'Paper', or 'Scissors', randomly.
// 2. Human player input, should be read from the console
// 3. Function that takes two inputs, and returns the winner
console.log("Hello World");

// Generates Rock, Paper, Scissors, randomly
function computerPlay() {
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

// Assist function allows to get necessary capitalization (Rock, and not rock)
function getFirstCharCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Starts a round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {

    // Make it caps insensitive
    playerSelection = getFirstCharCapital(playerSelection);
    computerSelection = getFirstCharCapital(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection) {
        return "It's a Draw! " + playerSelection + " vs " + computerSelection;
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You win! " + playerSelection + " destroys " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You win! " + playerSelection + " snips off " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " breaks " + playerSelection;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " snips off " + playerSelection;
        }
    }


}

// Plays a game of Rock, Paper, Scissors
function game() {
    let input;
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    // Welcome message
    alert("Welcome to Rock Paper Scissors. First to 5 Wins!");

    // Loop of the game, breaks when a player reaches 5 wins
    while (1) {
        input = window.prompt("It is your turn. Will you 'Rock', 'Paper', or 'Scissors'? (type 'quit' to quit the game)");
        if (getFirstCharCapital(input) === "Rock" || getFirstCharCapital(input) === "Paper" || getFirstCharCapital(input) === "Scissors") {
            let round = playRound(input, computerPlay());
            if (round.includes("win")) {
                playerScore++;
                //console.log(playerScore);
            } else if (round.includes("lose")) {
                computerScore++;
                //console.log(computerScore);
            }
            if (playerScore == 5 || computerScore == 5) {
                // Exit loop when either player reaches 5 wins
                break;
            }
            window.alert(`${round} \nYour score: ${playerScore}\nCPU Score: ${computerScore}`);
        } else if (getFirstCharCapital(input) === "Quit") {
            return "Game quit by user";
        } else {
            window.alert("Invalid input. Please try again.");
            continue;
        }

    }

    if (playerScore > computerScore) {
        return `You win the game!\nYour score: ${playerScore}\nCPU Score: ${computerScore}`
    } else {
        return `You lost this game. Try again?\nYour score: ${playerScore}\nCPU Score: ${computerScore}`
    }

}

// Runs the game
window.alert(game());