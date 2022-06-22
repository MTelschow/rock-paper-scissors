let gamesWon = 0;
let gamesLost = 0;
let finished = false;

const message = document.querySelector('.message');
const results = document.querySelector('.results');
results.textContent = 'dummy';
results.classList.add('hidden');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
playerScore.textContent = gamesWon;
computerScore.textContent = gamesLost;

const endMessage = document.querySelector('.endMessage');




const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function(){
    if(!finished){
        playRound('Scissors', computerPlay());
    }
});
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function(){
    if(!finished){
    playRound('Rock', computerPlay());
    }
});
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function(){
    if(!finished){
    playRound('Paper', computerPlay());
    }
});

const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', function(){
    gamesWon = 0;
    playerScore.textContent = gamesWon;
    gamesLost = 0;
    computerScore.textContent = gamesLost;
    results.textContent = "dummy";
    results.classList.add('hidden');
    endMessage.textContent = "";
    finished = false;
})




function playRound(playerSelection, computerSelection){
    results.classList.remove('hidden');
    const weapons = ["Rock","Paper","Scissors"];
    let score =  (weapons.indexOf(playerSelection) - weapons.indexOf(computerSelection)+3)%3;
    if (score == 0){
        results.textContent = `It's a Tie! Both picked ${playerSelection}`
    }

    if (score == 1){
        gamesWon++;
        playerScore.textContent = gamesWon;
        results.textContent = `You Won The Round! ${playerSelection} beats ${computerSelection}`
        if(gamesWon == 5){
            finished = true;
            endMessage.textContent = "THE VICTORY IS YOURS! CONGRATIULATIONS!"
        }
    }

    if (score == 2){
        gamesLost++;
        computerScore.textContent = gamesLost;
        results.textContent = `You Lost The Round! ${computerSelection} beats ${playerSelection}`
        if(gamesLost == 5){
            finished = true;
            endMessage.textContent = "DEAFEAT IS UPON YOU! BETTER LUCK NEXT TIME!"
        }
    }
}

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






// function playerChoice(){
//     let choice = capitalize(prompt("What do you play?"));
//     while (!verifyChoice(choice)){
//         choice = capitalize(prompt("Invalid Weapon! Enter a valid one:"));
//     }
//     return choice;
// }

// // function capitalize(string){
// //     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// function verifyChoice(String){
//     let a = (String == "Rock");
//     let b = (String == "Paper");
//     let c = (String == "Scissors");
//     return a||b||c; 
// }

// function game(){
//     let gamesWon = 0;
//     let gamesLost = 0;

//     // while ((gamesWon<3) && (gamesLost<3)){
//         result = playRound(playerChoice(), computerPlay());
//         if (result.includes("Won")){
//             gamesWon++;
//         }
//         if (result.includes("Lost")){
//             gamesLost++;
//         }
//         console.log(`${result} \nWon: ${gamesWon}\nLost: ${gamesLost}`);
//     // }

//     if (gamesWon == 3){
//         console.log("You Win The Game!")
//     }
//     if (gamesLost == 3){
//         console.log("You Lost The Game!")
//     }
// } 

// game();

