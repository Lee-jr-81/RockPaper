let randomNumber1 = Math.floor(Math.random() * 3) + 1;
let randomNumber2 = Math.floor(Math.random() * 3) + 1;
// let randomNumber3 = Math.floor(Math.random() * 3) + 1;

let imageSet1 = "paper" + randomNumber1 + ".png";
let imageSet2 = "paper" + randomNumber2 + ".png";

let sourceSet1 = "images/" + imageSet1;
let sourceset2 = "images/" + imageSet2;

let player1 = randomNumber1;
let player2 = randomNumber2;

function player1Outcome() {
  if (randomNumber1 === 1) {
    return "paper";
  } else if (randomNumber1 === 2) {
    return "rock";
  } else randomNumber1 === 3;
  return "scissors";
}

function player2Outcome() {
  if (randomNumber2 === 1) {
    return "paper";
  } else if (randomNumber2 === 2) {
    return "rock";
  } else randomNumber2 === 3;
  return "scissors";
}

// let dict = {1: "paper", 2: "rock", 3: "scissors"}

// Next do a query selector to declare which order we want our img selection to be.

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

// Next we select the src attribute and change it to our new sourceSet variable.

image1.setAttribute("src", sourceSet1);
image2.setAttribute("src", sourceset2);

// Lastly, define the logic for our rules by using conditional logic.

if (player1 === 1 && player2 === 2) {
  document.querySelector("h1").innerHTML = "player1 wins";
  document.getElementById("player1Header").textContent = player1Outcome();
  document.getElementById("player2Header").textContent = player2Outcome();
} else if (player1 === 2 && player2 === 3) {
  document.querySelector("h1").innerHTML = "player 1 wins";
  document.getElementById("player1Header").textContent = player1Outcome();
  document.getElementById("player2Header").textContent = player2Outcome();
} else if (player1 === 3 && player2 === 1) {
  document.querySelector("h1").innerHTML = "player 1 wins";
  document.getElementById("player1Header").textContent = player1Outcome();
  document.getElementById("player2Header").textContent = player2Outcome();
} else if (player1 === player2) {
  document.querySelector("h1").innerHTML = "Its a draw";
  document.getElementById("player1Header").textContent = player1Outcome();
  document.getElementById("player2Header").textContent = player2Outcome();
} else {
  document.querySelector("h1").innerHTML = "player 2 wins";
  document.getElementById("player1Header").textContent = player1Outcome();
  document.getElementById("player2Header").textContent = player2Outcome();
}
