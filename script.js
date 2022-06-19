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
    while (!verifyChoice(choice)){
        choice = capitalize(prompt("Error! Enter a valid choice:"));
    }
    return choice;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function verifyChoice(String){
    let a = (String == "Rock");
    let b = (String == "Paper");
    let c = (String == "Scissors");
    return a||b||c; 
}

function round(playerSelection, computerSelection){

}

