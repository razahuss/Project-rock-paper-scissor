
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    if(num === 1){ return "rock"; }
    else if(num === 2){ return "paper"; }
    else { return "scissor"; }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Win! Scissor beats Rock";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissor";
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Win! Scissor beats Paper";
    }
    else if(playerSelection === computerSelection){
        return "It's a tie";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter your choice: ");
        let caseSensitiveAnswer = playerChoice.toLowerCase();
        console.log(playRound(caseSensitiveAnswer, getComputerChoice()));
    }
}

game();