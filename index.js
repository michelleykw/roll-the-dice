function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const diceSrc1 = "./images/dice" + randomNumber1 + ".png";

  const randomNumber2 = Math.floor(Math.random() * 6 + 1);
  const diceSrc2 = "./images/dice" + randomNumber2 + ".png";

  document.getElementById("img1").setAttribute("src", diceSrc1);
  document.getElementById("img2").setAttribute("src", diceSrc2);

  determineWinner(randomNumber1, randomNumber2);
}

function determineWinner(dice1, dice2) {
  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
