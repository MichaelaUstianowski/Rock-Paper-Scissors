//Rock, Paper, Scissors

//equivalent to jQuery document.ready
window.addEventListener("load", () => {


//Getting buttons to assign a value when being pressed/player choice of hand
var playerChoice = document.getElementById("R").addEventListener("click", function(){
  let playerChoice = 1;
  console.log(playerChoice);
});

var playerChoice = document.getElementById("P").addEventListener("click", function(){
  let playerChoice = 2;
  console.log(playerChoice);
});

var playerChoice = document.getElementById("S").addEventListener("click", function(){
  let playerChoice = 3;
  console.log(playerChoice);
});

// Var compChoice;

// Function of the computers choice
// Randomly picks r, p or s
// Set compChoice to the computers choice
//
// Function get randomchoice() {
  // 	Get a random number and assign it to a value for comp choice
  // }
  //
  // Value between 0 and 1
  // If num between 0 and 0.33 = rock
  // Else if num more than 0.33 and less than or equal to 0.67 = paper
  // Else = scissors
  //
var compChoice = document.querySelector("#R").addEventListener("click", function(){
   let compChoice = Math.floor(Math.random()*(3-1+1)+1);
     console.log(compChoice);
});

var compChoice = document.querySelector("#P").addEventListener("click", function(){
   let compChoice = Math.floor(Math.random()*(3-1+1)+1);
     console.log(compChoice);
});

var compChoice = document.querySelector("#S").addEventListener("click", function(){
   let compChoice = Math.floor(Math.random()*(3-1+1)+1);
     console.log(compChoice);
});

if(playerChoice==compChoice){
  console.log('draw');
  // document.getElementById('outcome').innerHTML ="DRAW!";
};

// if playerChoice==compChoice => DRAW
// if playerChoice = 1 compChoice = 2 => COMP wins
// if playerChoice = 1 compChoice = 3 => PLAYER wins
// if playerChoice = 2 compChoice = 1 => PLAYER wins
// if playerChoice = 2 compChoice = 3 => COMP wins
// if playerChoice = 3 compChoice = 1 => PLayer wins
// if playerChoice = 3 compChoice = 2 => COMP wins


// Var playerScore = 0;




// Increase the winners score
//
// Function increasePlayerScore() {
// 	Increase the payers score by 1;
// }
//
// Function increaseCompScore() {
// Increase comp score by 1
// }
//
// Function restScoreBoard() {
// 	Set both scores back to 0
// }

});
