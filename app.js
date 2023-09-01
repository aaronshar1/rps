const computerChoice = [0, 1, 2];
const options = ["rock", "paper", "scissors"];
const reset = document.querySelector("#reset");
const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

// add eventlisteners to buttons
buttons.forEach(button => {
    button.addEventListener('click', getPlayerMove);
});

// refresh page to reset
reset.addEventListener('click', () => location.reload());

// keeps track of score
function countScore(results){
    if (results === 1){
        playerScore += 1;
    } else if (results == -1){
        computerScore += 1
    }

    updateElement(score, `Player Score: ${playerScore}\nComputer Score: ${computerScore}`)

    endGame()
}

// checks if game ends
function endGame(){
    if (playerScore === 5){
        appendElement(score, `You reached 5 points, you win!`)
        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerMove);
        });

    } else if (computerScore === 5){
        appendElement(score, `Computer reached 5 points, computer wins!`)
        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerMove);
        });
    }
}

function ComputerPlay(){
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length) ];
    return result;
};

function checkWinner(playerSelection, computerSelection){
    resultContainer = document.getElementById("results");
    if ((playerSelection > computerSelection || (playerSelection === 0 && computerSelection === 2)) && ! (playerSelection === 2 && computerSelection === 0)){
        updateElement(resultContainer, `You Win! Computer chose ${options[computerSelection]}`)
        return 1;
    } 
    else if (playerSelection === computerSelection){
        updateElement(resultContainer, `It's a draw! Computer also chose ${options[computerSelection]}`)
        return 0;
    }
    else {
        updateElement(resultContainer, `You Lose! Computer chose ${options[computerSelection]}`)
        return -1;
    };
};

function updateElement(parent, message){
    parent.textContent = message
}

function appendElement(parent, message){
    newElement = document.createElement("div")
    newElement.textContent = message
    parent.appendChild(newElement)
}

function getPlayerMove(e){
    let play = e.target.id
    let score = document.getElementById("score");

    if (play === "rock"){
        results = checkWinner(0, ComputerPlay())
    } else if (play === "paper"){
        results = checkWinner(1, ComputerPlay())
    } else {
        results = checkWinner(2, ComputerPlay())
    }

    countScore(results)
     
}


