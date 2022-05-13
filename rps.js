function computerPlay (){
    let game = ["rock","paper","scizzors"];
    let move = game[Math.floor(Math.random()*3)];
    return move;
}

function play(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        console.log("It's a Draw");
    }else if (playerSelection =="rock" && computerSelection=="paper"){
        console.log("You lose! Paper beats Rock...");
    }else if (playerSelection == "paper" && computerSelection=="rock"){
        console.log("Congratulations! You've won! Paper beats Rock!");
    }else if (playerSelection == "scizzors" && computerSelection == "paper"){
        console.log("Congratulations! You've won! Scizzors beats Paper!");
    }else if (playerSelection == "rock" && computerSelection == "scizzors"){
        console.log("Congratulations! You've won! Rock beats Scizzors!");
    }else if (playerSelection == "paper" && computerSelection == "scizzors"){
        console.log("You lose! Scizzors beats Paper...");
    }else if (playerSelection == "scizzors" && computerSelection == "rock"){
        console.log("You lose! Rock beats Scizzors...");
    }else{
        console.log("Your choice was not valid...");
    }
}
let choice = prompt("Choose your weapon");
let uniChoice = choice.toLowerCase();
let round = play(`${uniChoice}`,computerPlay());