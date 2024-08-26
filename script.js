//Rock paper scissors game will be played against a computer


function getComputerChoice(){
    random = Math.random(0,1);

    if(random<0.33){
        return "rock";
    }
    else if(random>0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let correctInput = false;
    let input;
    while(!correctInput){
    input = prompt("Type: rock, paper or scissors");
    if(input.toLowerCase()==="rock" ||input.toLowerCase()==="paper" ||input.toLowerCase()==="sciccors")
        correctInput=true;
    }

    return input;
}

function playRound(humanChoice, computerChoice){

    if(humanChoice=="rock"&&computerChoice=="rock"
    || humanChoice=="paper"&&computerChoice=="paper"
    || humanChoice=="scissors"&&computerChoice=="scissors"
    ){
        console.log("it's a tie");
        return "tie";
    }

    if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            console.log("rock does not win against paper. You lose.");
            return "loss";
        }
        if(computerChoice=="scissors"){
            console.log("rock wins against scissors. You win.");
            return "win";
        }
    }   

    if(humanChoice=="paper"){
        if(computerChoice=="scissors"){
            console.log("paper does not win against scissors. You lose.");
            return "loss";
        }
        if(computerChoice=="rock"){
            console.log("paper wins against rock. You win.");
            return "win";
        }
    }   

}

function playGame(){

let humanScore = 0;
let computerScore = 0;

for(i=0;i<5;i++){
    console.log(`round ${i+1}`);
    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
    let winner = playRound(humanSelection,computerSelection);
    if(winner=="tie"){
        console.log("noone gets a point");
    }
    if(winner=="win"){
        console.log("Player gets a point");
        humanScore++;
    }
    if(winner=="loss"){
        console.log("Computer gets a point");
        computerScore++;
    }
}

if(humanScore>computerScore){
    console.log("Player wins the game");
}
else if(humanScore==computerScore){
    console.log("Score is equal. It's a tie");
}
else if(humanScore<computerScore){
    console.log("Computer wins the game");
}
}

playGame();