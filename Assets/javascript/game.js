
//variables 
var wins = 0;
var loses = 0;


//updates win score
function updateWins() {
    document.querySelector("#wins").innerHTML = "wins: " + wins;
  }
  //updates the loses score
  function updateLoses() {
    document.querySelector("#loses").innerHTML = "loses: " + loses;
  }

  function updateScore() {
    document.querySelector("#scores").innerHTML = "scores: " + score;
  }

  // Calling functions to start the game.
  updateWins();
  updateLoses();
  updateScore();

  //if statement for when user clicks the crystal
  if (userInput === crystal[crystalIndex].a) {
    alert("Correct!");
    wins++;
    updateWins();   
  }
  //statement that resets game

  //random number function

  //total score function

  //score keeper