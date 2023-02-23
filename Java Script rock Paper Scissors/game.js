document.getElementById("messageButton").onclick = play;
function play() {

var userChoice = prompt("Do you choose rock, paper, or scissors?")
var computerChoice = (Math.random());
var compChoice = "";
var result = "";

//set computers choice
if (computerChoice < 0.34) {
	compChoice = "rock";
} else if( computerChoice > 0.34 && computerChoice < 0.67) {
	compChoice = "paper";
} else {
	compChoice = "scissors";
 }


//draw conditions
if(userChoice == compChoice) {
 result = " You had a draw.";}
 
//win conditions
else if (userChoice == "rock" && compChoice == "scissors") {
	 result = "You win!";
 } else if (userChoice == "paper" && compChoice == "rock") {
	 result = "You win!";
 } else if (userChoice == "scissors" && compChoice == "paper"){
	 result = "You win!";}
  
  //loos;e conditions
   else if (userChoice == "scissors" && compChoice == "rock") {
	 result = "You loose.";
 } else if (userChoice == "paper" && compChoice == "scissors") {
	 result = "You loose.";
 } else if (userChoice == "rock" && compChoice == "paper"){
	 result = "You loose.";}
  else{
   result = "Not yet set"
  }
  
  alert("Your chose " + userChoice + ". The computer chose " + compChoice + ". " + result + " Would you like to play again?");
  }