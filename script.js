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

function playRound(playerSelection, computerSelection){
    const weapons = ["Rock","Paper","Scissors"];
    let score =  (weapons.indexOf(playerSelection) - weapons.indexOf(computerSelection)+3)%3;
    if (score == 0){
        return `It's a Tie! Both picked ${playerSelection}`
    }

    if (score == 1){
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }

    if (score == 2){
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }
}
