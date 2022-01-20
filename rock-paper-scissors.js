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
