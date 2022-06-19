function computerPlay(){
    choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "Rock";
    }
    if(choice == 1){
        return "Paper";
    }
    if(choice == 2){
        return "Scissors";
    }
}

function playerChoice(){
    let choice = capitalize(prompt("What do you play?"));
    
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function round(playerSelection, computerSelection){

}

playerChoice();