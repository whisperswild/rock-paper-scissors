//This is a rock paper scissors game to be played against a computer in the browser console.

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

function playGame(playerSelection, computerSelection){
    let checkInput = typeof playerSelection

    if(checkInput === 'string'){
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            alert("You must enter a valid option!");
            playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
            playGame(playerSelection, computerSelection = getComputerChoice());
        }else{
            playerSelection = playerSelection.toLowerCase();
            let winner = getWinner(playerSelection, computerSelection);
            return winner;
        }
    }else {
        //not a string...try again..
        alert("You must enter a valid option!");
        playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
        playGame(playerSelection, computerSelection = getComputerChoice());
    }

}

function mainLoop(){
    //play 5 rounds 
    let playerWins = 0;
    let computerWins = 0;
    let tieCounter = 0;
    let winner = null;

    for(let i = 0; i<5; i++){
        let playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();


        if (playerSelection === null){
            //alert("Game canceled!");
            break;
        }else{
            winner = playGame(playerSelection, computerSelection);

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
    }
    alert("Player: " + playerWins + " and Computer: " + computerWins + " and " + tieCounter + " ties!");
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