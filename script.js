let userScore = 0;
let compScore = 0;
// let msgContainer = document.querySelector(".msg-container");
let msgContainer = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const options = ["rock", "paper", "scissors"];
const GetCompChoice = () => {
  const RandomIdx = Math.floor(Math.random() * 3);
  return options[RandomIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  msgContainer.innerText = "Game was draw, Play Again";
  msgContainer.style.backgroundColor = "#081b31";
};
const showWinner = (win, userChoice, CompChoice) => {
  if (win) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You Win!");
    msgContainer.innerText = `You win! Your ${userChoice} beats ${CompChoice}`;
    msgContainer.style.backgroundColor = "green";
  } else {
    compScore++;
    CompScorePara.innerText = compScore;
    // console.log("You Lose");
    msgContainer.innerText = `You Lost Your ${CompChoice} beats ${userChoice}`;
    msgContainer.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const CompChoice = GetCompChoice();
  //   console.log(userChoice, CompChoice);
  if (userChoice == CompChoice) {
    drawGame();
  } else {
    let win = true;
    if (userChoice === "rock") {
      win = CompChoice == "scissors" ? true : false;
    }
    if (userChoice === "paper") {
      win = CompChoice == "rock" ? true : false;
    }
    if (userChoice === "scissors") {
      win = CompChoice == "paper" ? true : false;
    }
    showWinner(win, userChoice, CompChoice);
  }
};

// console.log(choices);
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log(userChoice);
    playGame(userChoice);
  });
});
