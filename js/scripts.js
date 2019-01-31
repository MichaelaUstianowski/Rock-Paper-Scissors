//Rock, Paper, Scissors

//equivalent to jQuery document.ready
window.addEventListener("load", () => {

//COMPUTER'S CHOICE
  //Generates a number between 1 and 3. This is the computer's choice.
  function compChoiceGenerator(){
    compChoice = Math.floor(Math.random()*(3-1+1)+1)
  };

  //This will print the computer's choice onto the page.
  function printCompChoice(){
    if(compChoice == 1){
      document.getElementById('printCompChoice').innerHTML = 'Rock';
    }else if(compChoice == 2){
      document.getElementById('printCompChoice').innerHTML = 'Paper';
    }else
    document.getElementById('printCompChoice').innerHTML = 'Scissors';
    };

//SCOREBOARD
  //Declaring the scores for the scoreboard
  var playerScore = 0;
  var compScore = 0;

  //Increase scoreboard functions for both player and computer.
  function increasePlayerScore() {
    playerScore++;
    document.getElementById('playerscore').innerHTML = playerScore;
  };
  function increaseCompScore(){
    compScore++;
    document.getElementById('compscore').innerHTML = compScore;
  };

//this will enable the player choice buttons, as used below in the reset and play again buttons, since selecting an option (rock paper or scissor, disables their corresponding buttons)
  function enablePlayerChoice() {
    document.getElementById("R").disabled = false;
    document.getElementById("P").disabled = false;
    document.getElementById("S").disabled = false;
  }


  //This will reset the scoreboard to 0 and reset the player and computer choices.
    document.getElementById("reset").addEventListener("click", function(){
      playerScore = 0;
      compScore = 0;
      document.getElementById('playerscore').innerHTML = playerScore;
      document.getElementById('compscore').innerHTML = compScore;
      document.getElementById('outcome').innerHTML = 'outcome';
      document.getElementById('printCompChoice').innerHTML = 'Computer Choice';
      document.getElementById('printPlayerChoice').innerHTML = 'Player Choice';
      enablePlayerChoice();
    });

    //Play again button resets only the outcome of the game and the choices made BUT not score
    document.getElementById("play-again").addEventListener("click", function(){
      document.getElementById('outcome').innerHTML = 'outcome';
      document.getElementById('printCompChoice').innerHTML = 'Computer Choice';
      document.getElementById('printPlayerChoice').innerHTML = 'Player Choice';
      enablePlayerChoice();
    });

//HOW TO PLAY SECTION
//Default instructions display
function instructionsDisplay() {
  document.querySelector(".instructions").style.display = "none";
};

//calling the default display for the instructons section
instructionsDisplay();

//function to toggle instructions
function instructionsToggle() {
  var x = document.querySelector(".instructions");
  if (x.style.display === "none") {
    x.style.display = "block";
    disablePlayerChoice();
    document.querySelector(".scoreboard").style.display = "none";
  } else {
    x.style.display = "none";
    enablePlayerChoice();
    document.querySelector(".scoreboard").style.display = "block";
  }
};

//Toggling instructons on click
document.querySelector("#instructions-title").addEventListener("click", function(){
instructionsToggle();
});

//COMPARING PLAYER AND COMPUTER CHOICES
  //Determines the winner of the game by comparing the player's and the computer's choices
    function determineWinner(playerChoice){
      if(playerChoice==compChoice){
      document.getElementById('outcome').innerHTML ="DRAW!";
      }else if(playerChoice == 1 && compChoice == 2){
        document.getElementById('outcome').innerHTML ="COMP WINS!";
        increaseCompScore();
      }else if(playerChoice == 1 && compChoice == 3){
        document.getElementById('outcome').innerHTML ="PLAYER WINS!";
        increasePlayerScore();
      }else if(playerChoice == 2 && compChoice == 1){
        document.getElementById('outcome').innerHTML ="PLAYER WINS!";
        increasePlayerScore();
      }else if(playerChoice == 2 && compChoice == 3){
        document.getElementById('outcome').innerHTML ="COMP WINS!";
        increaseCompScore();
      }else if(playerChoice == 3 && compChoice == 1){
        document.getElementById('outcome').innerHTML ="COMP WINS!";
        increaseCompScore();
      }else if(playerChoice == 3 && compChoice == 2){
        document.getElementById('outcome').innerHTML ="PLAYER WINS!";
        increasePlayerScore();
      }
    }
//PLAYER CHOICE & GAMEPLAY.
  //This will disable the player choice buttons as used below
    function disablePlayerChoice() {
      document.getElementById("R").disabled = true;
      document.getElementById("P").disabled = true;
      document.getElementById("S").disabled = true;
    }

//Each button below are the options for the player. The game begins when the player selects and option.
//Player selects 'ROCK' = playerChoice 1
document.getElementById("R").addEventListener("click", function(){
document.getElementById('printPlayerChoice').innerHTML = 'Rock';
disablePlayerChoice();
compChoiceGenerator();
printCompChoice();
determineWinner(1);
});

//Player selects 'PAPER' = playerChoice 2
document.getElementById("P").addEventListener("click", function(){
  document.getElementById('printPlayerChoice').innerHTML = 'Paper';
  disablePlayerChoice();
  compChoiceGenerator();
  printCompChoice();
  determineWinner(2);
});

//Player selects 'Scissors' = playerChoice 3
document.getElementById("S").addEventListener("click", function(){
  document.getElementById('printPlayerChoice').innerHTML = 'Scissors';
  disablePlayerChoice();
  compChoiceGenerator();
  printCompChoice();
  determineWinner(3);
  });
});
