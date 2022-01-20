function computerPlay() {
  let computerHand = Math.floor(Math.random() * 3);
  if (computerHand === 0) {
    return "rock";

  }
  else if (computerHand === 1) {
    return "paper";

  }
  else if (computerHand === 2) {
    return "scissors";

  }
}
console.log(computerPlay());



function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return `It's A Draw! You Both Chose ${playerSelection}`
    }
    else if (computerSelection === "paper") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`
    }
    else if (computerSelection === "scissors") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`
    }
    else if (computerSelection === "paper") {
      return `It's A Draw! You Both Chose ${playerSelection}`
    }
    else if (computerSelection === "scissors") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`
    }
    else if (computerSelection === "paper") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`
    }
    else if (computerSelection === "scissors") {
      return `It's A Draw! You Both Chose ${playerSelection}`
    }
  }
}
console.log(playRound("rock", computerPlay()));
//playerSelection = prompt ("Pick a hand");
//playerSelection.toLowerCase();