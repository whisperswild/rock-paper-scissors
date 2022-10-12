//This is a rock paper scissors game to be played against a computer in the browser console.

function getComputerChoice(){
    let computerChoice = Math.random() * (3-1) + 1; 

    switch (computerChoice){
        case: 1
            computerChoice = "rock";
            return computerChoice;
        case: 2
            computerChoice = "paper";
            return computerChoice;
        case: 3
            computerChoice = "scissors";
            return computerChoice;
    }
}

function play(playerSelection, computerSelection = getComputerChoice()){{
    let playerChoice = prompt("What is your choice? Rock, Paper, or Scissors?");

    if(typeof playerChoice === 'string'){
        playerChoice = playerChoice.toLowerCase();
        
        if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors"){
            alert("You must enter a valid option!")
            playerChoice = prompt("What is your choice? Rock, Paper, or Scissors?");
            play(playerSelection, computerSelection = getComputerChoice());
        } else{
            getWinner(playerSelection, computerSelection);
        }
    }else {
        
    }

}}

function game(){
    //play 5 rounds 

    for(let i = 0, i<5, i++){

        play(playerSelection(), computerSelection());
    }
}

function getWinner(playerSelection, computerSelection){
    switch(computerChoice){
        case: "rock"
        if (playerChoice === "paper"){
            getWinner = "Player Wins with Paper!";
            return;
        }else if (playerChoice === "rock"){
            getWinner = "Tie! Try again!";
        }else{
            getWinner = "Computer wins with Rock!"
        }

        case: "paper"
        if (playerChoice === "paper"){
            getWinner = "Tie! Try again!";
            return;
        }else if (playerChoice === "rock"){
            getWinner = "Computer wins with Paper!";
        }else{
            getWinner = "Player wins with Scissors!"
        }
    }
}