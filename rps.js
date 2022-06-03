function computerPlay (){
    let game = ["rock","paper","scissors"];
    let move = game[Math.floor(Math.random()*3)];
    return move;
}

function play(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        h1.textContent = "It's a Draw!";
    }else if (playerSelection =="rock" && computerSelection=="paper"){
        h1.textContent = "You lose! Paper beats Rock..."
        computerCounter= computerCounter +1;
        computerC.textContent =`${computerCounter}`;
    }else if (playerSelection == "paper" && computerSelection=="rock"){
        h1.textContent = "You've won! Paper beats Rock!";
        playerCounter = playerCounter+1;
        playerC.textContent =`${playerCounter}`;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        h1.textContent ="You've won! Scissors beats Paper!";
        playerCounter = playerCounter+1;
        playerC.textContent =`${playerCounter}`;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        h1.textContent = "You've won! Rock beats Scissors!";
        playerCounter = playerCounter+1;
        playerC.textContent =`${playerCounter}`;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        h1.textContent = "You lose! Scissors beats Paper...";
        computerCounter= computerCounter +1;
        computerC.textContent =`${computerCounter}`;
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        h1.textContent = "You lose! Rock beats Scissors...";
        computerCounter= computerCounter +1;
        computerC.textContent =`${computerCounter}`;
    }else if (playerCounter===computerCounter){
        h1.textContent = "It's a draw!";
    }else{
        h1.textContent = "Your choice was not valid...";
    }
    bestOf5(h1,playerC,computerC);

}
let playerCounter=0;
let computerCounter=0;

function bestOf5 (h1,playerC,computerC){
    if  (playerCounter ===5 || computerCounter===5){
        if (playerCounter >computerCounter){
            h1.textContent ="You are the winner";
        }else if (playerCounter<computerCounter){
            h1.textContent = "You lost...";
        }
        resetBtn();
        setTimeout(reset, 1000);
    }    
}
function resetBtn (){
        rock.style.pointerEvents ="none";
        paper.style.pointerEvents = "none";
        scissor.style.pointerEvents = "none";
}
function reset(){
    var x = document.querySelector(".hidden");
    if (x.style.display ==="block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
function resetGame(h1,playerC,computerC){
    h1.textContent = "Advance Battle";
    rock.style.pointerEvents = "all";
    paper.style.pointerEvents = "all";
    scissor.style.pointerEvents = "all";
    playerCounter =computerCounter  =0;
    playerC.textContent = computerC.textContent ='0';
    reset();
}

const h1 = document.querySelector(".scoreBoard");
const playerC = document.querySelector(".one");
const computerC = document.querySelector(".two")
const rock = document.querySelector(".rock");
rock.addEventListener("click",() => play('rock',computerPlay()));
const paper = document.querySelector(".paper");
paper.addEventListener("click",() => play("paper",computerPlay()));
const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => play("scissors",computerPlay()));
const button = document.querySelector(".replay");
button.addEventListener("click",()=> resetGame(h1,playerC,computerC));