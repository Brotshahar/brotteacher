const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");
const counter = document.querySelector("#counter");
const result = document.querySelector("#result");

function suffule() {
  const randomOne = Math.floor(Math.random() * 6) + 1;
  const randomTwo = Math.floor(Math.random() * 6) + 1;

  dice1.src = "./asset/" + randomOne + ".png";
  dice2.src = "./asset/" + randomTwo + ".png";

  if (randomOne === randomTwo) {
    counter.innerText = Number(counter.innerText) + 1;
    result.innerText = "יצא דאבל";
    // result.className = "animate__animated animate__bounce animate__infinite";
    // dice1.className = "animate__animated animate__bounce animate__infinite";
    // dice2.className = "animate__animated animate__bounce animate__infinite";
  } else {
    result.innerText = "";
    dice1.className = "";
    dice2.className = "";
  }
}