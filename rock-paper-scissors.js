function computerPlay() {
  const hands = ["rock", "paper", "scissors"];
  let computerHand = Math.floor(Math.random() * hands.length);
  return hands[computerHand];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return `It's A Draw! You Both Chose ${playerSelection}`;
    } else if (computerSelection === "paper") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`;
    } else if (computerSelection === "scissors") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`;
    } else if (computerSelection === "paper") {
      return `It's A Draw! You Both Chose ${playerSelection}`;
    } else if (computerSelection === "scissors") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} Beats ${playerSelection}`;
    } else if (computerSelection === "paper") {
      return `You Win! ${playerSelection} Beats ${computerSelection}`;
    } else if (computerSelection === "scissors") {
      return `It's A Draw! You Both Chose ${playerSelection}`;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  alert(
    "This is a game of rock, paper, scissors. You will play a best of 5 against the computer. Type in your selected hand choice and view the result on the console."
  );
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick a hand");
    playerSelection = playerSelection.toLowerCase();
    if (
      playerSelection != "rock" &&
      playerSelection != "paper" &&
      playerSelection != "scissors"
    ) {
      console.log("Please enter either rock, paper or scissors");
      i--;
      continue;
    }
    let outcome = playRound(playerSelection, computerPlay());
    console.log(outcome);
    if (outcome.includes("You Win!")) {
      playerScore++;
    } else if (outcome.includes("You Lose!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `You Win ${playerScore}-${computerScore}`;
  } else if (playerScore < computerScore) {
    return `You Lose ${playerScore}-${computerScore}`;
  } else if (playerScore === computerScore) {
    return `It's a draw ${computerScore}-${playerScore}`;
  }
}
console.log(game());
