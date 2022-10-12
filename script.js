//This is a rock paper scissors game to be played against a computer in the browser console.

function getComputerChoice(){
    let computerChoice = Math.random() * (3-1) + 1; 

    switch (computerChoice){
        case: 1
            computerChoice = "Rock";
            return computerChoice;
        case: 2
            computerChoice = "Paper";
            return computerChoice;
        case: 3
            computerChoice = "Scissors";
            return computerChoice;
    }
}

function play(playerSelection, computerSelection = getComputerChoice()){{
    

}}

function game(){
    //play 5 rounds 

    for(let i = 0, i<5, i++){
        let playerChoice = prompt("What is your choice? Rock, Paper, or Scissors?");
        play(playerSelection(), computerSelection());
    }
}