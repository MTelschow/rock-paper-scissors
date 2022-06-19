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

function capitalize(input){
    input
    output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(output);
}