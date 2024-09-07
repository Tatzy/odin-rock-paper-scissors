//Rock paper scissors game will be played against a computer

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const round = document.querySelector("#round");
const roundWin = document.querySelector("#roundWin");
const roundPoint = document.querySelector("#roundPoint");

function getComputerChoice(){
    let rand = Math.random(0,1);
        
    if(rand<0.33){
        return "rock";
    }
    else if(rand>0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}




function playRound(humanChoice, computerChoice){

    if(i<5){

    if(humanChoice=="rock"&&computerChoice=="rock"
    || humanChoice=="paper"&&computerChoice=="paper"
    || humanChoice=="scissors"&&computerChoice=="scissors"
    ){
        roundWin.textContent="it's a tie";
        getResult("tie");
    }

    if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            roundWin.textContent="rock does not win against paper. You lose.";
            getResult("loss");
        }
        if(computerChoice=="scissors"){
            roundWin.textContent="rock wins against scissors. You win.";
            getResult("win");
        }
    }   

    if(humanChoice=="paper"){
        if(computerChoice=="scissors"){
            roundWin.textContent="paper does not win against scissors. You lose.";
            getResult("loss");
        }
        if(computerChoice=="rock"){
            roundWin.textContent="paper wins against rock. You win.";
            getResult("win");
        }
    }  
    
    if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            roundWin.textContent="scissors does not win against rock. You lose.";
            getResult("loss");
        }
        if(computerChoice=="paper"){
            roundWin.textContent="scissors wins against paper. You win.";
            getResult("win");
        }
    }  
}
}


function getResult(winner){

    if(winner=="tie"){
        console.log("noone gets a point");
    }
    else if(winner=="win"){
        console.log("Player gets a point");
        humanScore++;
    }
    else if(winner=="loss"){
        console.log("Computer gets a point");
        computerScore++;
    }
    i++;
}

function endScore(){
if(i<5){
    round.textContent= `round ${i+1}`;
}
else if(i==5)
{
    if(humanScore>computerScore){
        result.textContent="Player wins the game";
    }
    else if(humanScore==computerScore){
        result.textContent="Score is equal. It's a tie";
    }
    else if(humanScore<computerScore){
        result.textContent="Computer wins the game";
    }
    }
}



let humanScore = 0;
let computerScore = 0;
let i = 0;
let winner = "";





rock.addEventListener("click", ()=>{
    playRound("rock",getComputerChoice());
    endScore();
    
});
paper.addEventListener("click", ()=>{
    playRound("paper",getComputerChoice());
    endScore();

});
scissors.addEventListener("click", ()=>{
    playRound("scissors",getComputerChoice());
    endScore();

});



