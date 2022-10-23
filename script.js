//This is a rock paper scissors game to be played against a computer in the browser console.

//Could add a tie breaker function and have the game play "best of x" rounds.

let playerWins = 0;
let computerWins = 0;
let tieCounter = 0;

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3) + 1; 
    switch (computerSelection){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function playGame(playerSelection){
    let checkInput = typeof playerSelection;

    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let winner = getWinner(playerSelection, computerSelection);
    declareWinner(playerSelection, computerSelection, winner);
    
    return winner;
}

function endGame(){
    const finalScore = document.createElement('div');
    const scoreCard = document.querySelector('#scoreCard');

    finalScore.textContent = "GAME OVER! Player won " + playerWins + " times and the Computer won " + computerWins + " times! There were " + tieCounter + " ties!";
    
    scoreCard.appendChild(finalScore);

    playerWins = 0;
    computerWins = 0;
    tieCounter = 0;
}

function getWinner(playerSelection, computerSelection){
    switch(computerSelection){
        case "rock":
            if (playerSelection === "paper"){
                return "player";
            }else if (playerSelection === "rock"){
                return "tie";
            }else{
                return "computer";
            }

        case "paper":
            if (playerSelection === "paper"){
                return "tie";
            }else if (playerSelection === "rock"){
                return  "computer";
            }else{
                return "player";
            }
        case "scissors":
            if (playerSelection === "paper"){
                return "computer";
            }else if (playerSelection === "rock"){
                return "player";
            }else{
                return "tie";
            }
    }
}

function declareWinner(playerSelection, computerSelection, winner){
    const scoreCard = document.querySelector("#scoreCard");
    const score = document.createElement('div');
    const runningTotal = document.createElement('div');

   

    if(winner === "player"){
        score.textContent = winner + " wins with " + playerSelection + ". The computer selected " + computerSelection + "!";
       
        playerWins++
    }else if (winner === "computer"){
        score.textContent = winner + " wins with " + computerSelection + ". The player chose " + playerSelection + "!";
        computerWins++
    }else{
        score.textContent = "It was a tie! The player and computer both chose " + playerSelection + "!";
        tieCounter++
    }

    scoreCard.appendChild(score);
    runningTotal.textContent = "Player wins: " + playerWins + " Computer wins: " + computerWins + " Ties: " + tieCounter
    scoreCard.appendChild(runningTotal);

    if (playerWins === 5 || computerWins === 5){
        endGame();
    }
}

const button = document.querySelector(".buttons");
button.addEventListener('click', e => {
    const whichButton = e.target.nodeName;
    if(whichButton === 'BUTTON'){
        playGame(e.target.id)
    }


});

