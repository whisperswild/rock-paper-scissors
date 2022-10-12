//This is a rock paper scissors game to be played against a computer in the browser console.

function getComputerChoice(){
    let computerChoice = Math.random() * (3-1) + 1; 

    switch (computerChoice){
        case 1:
            computerChoice = "rock";
            return computerChoice;
        case 2:
            computerChoice = "paper";
            return computerChoice;
        case 3:
            computerChoice = "scissors";
            return computerChoice;
    }
}

function play(playerSelection, computerSelection = getComputerChoice()){
    

    if(typeof playerChoice === 'string'){
        playerChoice = playerChoice.toLowerCase();
        getWinner(playerSelection, computerSelection);
    }else {
        if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors"){
            alert("You must enter a valid option!");
            playerChoice = prompt("What is your choice? Rock, Paper, or Scissors?");
            play(playerSelection, computerSelection = getComputerChoice());
        }
    
    }

}

function playGame(){
    //play 5 rounds 
    for(let i = 0; i<5; i++){
        let playerChoice = prompt("What is your choice? Rock, Paper, or Scissors?");
        let computerChoice = getComputerChoice();
        playGame(playerChoice, computerChoice);
    }
}

function getWinner(playerSelection, computerSelection){
    switch(computerChoice){
        case "rock":
            if (playerChoice === "paper"){
             getWinner = "Player Wins with Paper!";
                return getWinner;
            }else if (playerChoice === "rock"){
                getWinner = "Tie! Try again!";
                return getWinner;
            }else{
                getWinner = "Computer wins with Rock!"
                return getWinner;
            }

        case "paper":
            if (playerChoice === "paper"){
                getWinner = "Tie! Try again!";
                return getWinner;
            }else if (playerChoice === "rock"){
                getWinner = "Computer wins with Paper!";
                return getWinner;
            }else{
                getWinner = "Player wins with Scissors!"
                return getWinner;
            }
        case "scissors":
            if (playerChoice === "paper"){
                getWinner = "Computer wins with Scissors!";
                return getWinner;
            }else if (playerChoice === "rock"){
                getWinner = "Player wins with Rock!";
                return getWinner;
            }else{
                getWinner = "Tie! Try again!"
                return getWinner;
            }
    }
}