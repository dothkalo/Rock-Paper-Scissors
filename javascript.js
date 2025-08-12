console.log("Hello ;)")

const Button = document.querySelector("#Button");
const log = document.querySelector("#log");

let player;
let humanScore = 0;
let computerScore = 0;
Button.addEventListener("click",() => {
    player = prompt("Rock Paper Scissors?");

    while(player === null || player.trim() === ""){
        player = prompt("Please...Rock Paper Scissors?")
    } 

console.log(getComputerChoice());
console.log(player);
});

function getComputerChoice(){
    let mates = Math.floor(Math.random()*3);
    let result = "none";

    if(mates == 0){
        result = "Rock";}
    else if(mates == 1){
        result = "Paper";}
    else if(mates == 2){
        result = "Scissors";}

    return result;
}

function getHumanChoice(){

}
