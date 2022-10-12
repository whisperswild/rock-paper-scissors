//This is a rock paper scissors game to be played against a computer in the browser console.

function getComputerChoice(){
    let computerSelection = Math.random() * (3-1) + 1; 

    switch (computerSelection){
        case 1:
            computerSelection = "rock";
            return computerSelection;
        case 2:
            computerSelection = "paper";
            return computerSelection;
        case 3:
            computerSelection = "scissors";
            return computerSelection;
    }
}

function playGame(playerSelection, computerSelection = getComputerChoice()){
    let checkInput = typeof playerSelection

    if(checkInput === 'string'){
        playerSelection = playerSelection.toLowerCase();
        getWinner(playerSelection, computerSelection);
        alert(getWinner)
        //return getWinner;
    }else {
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            alert("You must enter a valid option!");
            playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
            play(playerSelection, computerSelection = getComputerChoice());
        }
    
    }

}

function mainLoop(){
    //play 5 rounds 
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();

        if (playerSelection === null){
            alert("Game canceled!");
        }else{
            playGame(playerSelection, computerSelection);
        }
        
        
    }
}

function getWinner(playerSelection, computerSelection){
    switch(computerSelection){
        case "rock":
            if (playerSelection === "paper"){
             getWinner = "Player Wins with Paper!";
                return getWinner;
            }else if (playerSelection === "rock"){
                getWinner = "Tie! Try again!";
                return getWinner;
            }else{
                getWinner = "Computer wins with Rock!"
                return getWinner;
            }

        case "paper":
            if (playerSelection === "paper"){
                getWinner = "Tie! Try again!";
                return getWinner;
            }else if (playerSelection === "rock"){
                getWinner = "Computer wins with Paper!";
                return getWinner;
            }else{
                getWinner = "Player wins with Scissors!"
                return getWinner;
            }
        case "scissors":
            if (playerSelection === "paper"){
                getWinner = "Computer wins with Scissors!";
                return getWinner;
            }else if (playerSelection === "rock"){
                getWinner = "Player wins with Rock!";
                return getWinner;
            }else{
                getWinner = "Tie! Try again!"
                return getWinner;
            }
    }
}