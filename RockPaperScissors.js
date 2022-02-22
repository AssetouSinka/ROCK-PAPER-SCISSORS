let playerScore = 0;
let computerScore = 0;
let words = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "Rock" && computerSelection === "Paper") {
      computerScore = computerScore + 1;
    console.log("you Lose! Paper beats Rock");
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore = playerScore + 1;
  alert("You Won! Paper beats Rock");
  }
  else {
    playerSelection == "rock" && computerSelection == "rock" || playerSelection  == "paper" && computerSelection == "paper" || playerSelection == "scissors" &&   computerSelection == "scissors";
            alert("It's a tie!!!");
  }
}

function game(){
    
  while(playerScore <5 && computerScore <5) {
      let playerSelection = prompt("Rock", "Paper", "Scissors?");
      let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
    let score = `The score is ${playerScore} to ${computerScore}`;
  alert(score);
  }

}

function computerPlay() {
let computerSelection =  words[Math.floor(Math.random() * 3)];
return computerSelection
}
game();