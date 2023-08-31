let computerChoice = [0, 1, 2];
let options = ["rock", "paper", "scissors"]

function ComputerPlay(){
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length) ];
    return result;
};

function checkWinner(playerSelection, computerSelection){
    if (playerSelection > computerSelection || (playerSelection === 0 && computerSelection === 2)){
        return `You Win! Computer chose ${options[computerSelection]}`;
    } 
    else if (playerSelection === computerSelection){
        return `It's a draw!`;
    }
    else {
        return `You Lose! Computer chose ${options[computerSelection]}`;
    };
};

function game(){
    let message = ""
    while (message.toLowerCase() !== "exit"){
        message = prompt("Type r, p, s for rock, paper, or scissors: ")
        console.log(message.toLowerCase())
        let playerChoice = -1
        if (message.toLowerCase() === "r"){
            playerChoice = 0
        } else if (message.toLowerCase() === "p"){
            playerChoice = 1
        } else if (message.toLowerCase() === "s"){
            playerChoice = 2
        } else if (message.toLowerCase() !== "exit") {
            console.log("Hello")
            continue
        }

        console.log(checkWinner(playerChoice, ComputerPlay()))
    }
};