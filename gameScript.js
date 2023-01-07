let playerwins = 0;
let computerwins = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    if(num === 1){ return "rock"; }
    else if(num === 2){ return "paper"; }
    else { return "scissor"; }
}

function playRound(playerSelection, computerSelection) {
    computerChoice.textContent = computerSelection;
    if(playerwins >= 5 || computerwins >= 5){
        winner.textContent = playerwins >= 5 ? "You Won the Game" : "The Computer Won the Game";
        playerwins = 0;
        computerwins = 0;
        pwins.textContent = "Player wins: " + playerwins;
        cwins.textContent = "Computer wins: " + computerwins;
    }
    if(playerSelection === "rock" && computerSelection === "scissor"){
        result.textContent = "You Win! Scissor beats Rock";
        playerwins++;
        pwins.textContent = "Player wins: " + playerwins;
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        result.textContent = "You Lose! Paper beats Rock";
        computerwins++;
        cwins.textContent = "Computer wins: " + computerwins;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        result.textContent = "You Win! Paper beats Rock";
        playerwins++;
        pwins.textContent = "Player wins: " + playerwins;
    }
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        result.textContent = "You Lose! Scissor beats Paper";
        computerwins++;
        cwins.textContent = "Computer wins: " + computerwins;
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        result.textContent = "You Lose! Rock beats Scissor";
        computerwins++;
        cwins.textContent = "Computer wins: " + computerwins;
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        result.textContent = "You Win! Scissor beats paper";
        playerwins++;
        pwins.textContent = "Player wins: " + playerwins;
    }
    else if(playerSelection === computerSelection){
        result.textContent = "It's a tie";
    }
    else{
        result.textContent = "Error";
    }
}

const rockbtn = document.querySelector('.rock-button');
const paperbtn = document.querySelector('.paper-button');
const scissorbtn = document.querySelector('.scissor-button');
const result = document.querySelector('.result');
const computerChoice = document.querySelector('.computer-choice');
const pwins = document.querySelector('.player-wins');
const cwins = document.querySelector('.computer-wins');
const winner = document.querySelector('.winner');

rockbtn.addEventListener('click', function() { playRound("rock", getComputerChoice()); });
paperbtn.addEventListener('click', function () { playRound("paper", getComputerChoice()); });
scissorbtn.addEventListener('click', function() { playRound("scissor", getComputerChoice()); });


