function computerPlay (){
    let game = ["rock","paper","scizzors"];
    let move = game[Math.floor(Math.random()*3)];
    return move;
}

function play(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        console.log("It's a Draw");
    }else if (playerSelection =="rock" && computerSelection=="paper"){
        console.log("You lose! Paper beats Rock...")
        playerCounter = playerCounter-1;
    }else if (playerSelection == "paper" && computerSelection=="rock"){
        console.log("Congratulations! You've won! Paper beats Rock!");
        playerCounter = playerCounter+1;
    }else if (playerSelection == "scizzors" && computerSelection == "paper"){
        console.log("Congratulations! You've won! Scizzors beats Paper!");
        playerCounter = playerCounter+1;
    }else if (playerSelection == "rock" && computerSelection == "scizzors"){
        console.log("Congratulations! You've won! Rock beats Scizzors!");
        playerCounter = playerCounter+1;
    }else if (playerSelection == "paper" && computerSelection == "scizzors"){
        console.log("You lose! Scizzors beats Paper...");
        playerCounter = playerCounter-1;
    }else if (playerSelection == "scizzors" && computerSelection == "rock"){
        console.log("You lose! Rock beats Scizzors...");
        playerCounter = playerCounter-1;
    }else if (playerCounter===computerCounter){
        console.log("It's a draw!");
    }else{
        console.log("Your choice was not valid...");
    }
}
let playerCounter=0;
let computerCounter=0;


function bestOf3 (){
    for (let i=0;i<5;i++){
        let choice = prompt("Choose your weapon");
        let uniChoice = choice.toLowerCase();
        let round = play(`${uniChoice}`,computerPlay());
        if (playerCounter===3 || playerCounter===-3){
            break;
        }
    }
    if (playerCounter >computerCounter){
        console.log("You are the winner");
    }else if (playerCounter<computerCounter){
        console.log("You lost...");
    }      
}



let cringe = bestOf3();