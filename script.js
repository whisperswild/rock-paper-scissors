//This is a rock paper scissors game to be played against a computer in the browser console.
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


function playGame(){
    

    let playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
    let checkInput = typeof playerSelection;

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === null){
        //alert("Game canceled!");
        winner =  null;
        return winner;
    }else{
        if(checkInput === 'string'){
            if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
                alert("You must enter a valid option!");           
                playGame();
            }else{
                playerSelection = playerSelection.toLowerCase();
                let computerSelection = getComputerChoice();
                let winner = getWinner(playerSelection, computerSelection);
                declareWinner(playerSelection, computerSelection, winner);
    
                return winner;
            }
        }else {
            alert("You must enter a valid option!");
            playGame();
        }
    }
}

function mainLoop(){
    //play 5 rounds 

    let winner = null;

    for(let i = 0; i<5; i++){
       

        winner = playGame();

       
    
    }

    alert("Player won " + playerWins + " times and the Computer won " + computerWins + " times! There were " + tieCounter + " ties!");
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
    if(winner === "player"){
        alert(winner + " wins with " + playerSelection + ". The computer selected " + computerSelection + "!");
        playerWins++
    }else if (winner === "computer"){
        alert(winner + " wins with " + computerSelection + ". The player chose " + playerSelection + "!");
        computerWins++
    }else{
        alert("It was a tie! The player and computer both chose " + playerSelection + "!");
        tieCounter++
    }
}