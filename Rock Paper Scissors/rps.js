const choices = ["rock", "paper" , "scissors"]

function getComputerChoice (){
    const option = choices [Math.floor(Math.random() * choices.length)];
    return option;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "True";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection =="paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
} else {
    return "Computer";
    }
}

function gamePlay(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's Tie"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


function getPlayerChoice(){
    let Input = false;
    while(Input == false){
        const option = prompt("Rock Paper Scissors");
        if(option == null){
            continue;
        }
        const optionInLower = option.toLowerCase();
        if(choices.includes(optionInLower)){
            Input = true;
            return optionInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(gamePlay(playerSelection, computerSelection));
        console.log("Break");
        if(checkWinner(playerSelection,computerSelection) == "Player"){
            scorePlayer++;
        } else if(checkWinner(playerSelection,computerSelection) == "Computer"){
            scoreComputer++   
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player is the winner");
    } else if (scorePlayer < scoreComputer){
        console.log("Computer is the winner");
    } else {
        console.log("Game Tied");
    }
}

game()