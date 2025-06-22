let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userCounters = document.querySelector("#user-score");
let compCounter = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//function for Computer turn
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let draw = () => {
  console.log("Draw Game");
  msg.innerText = "Game Draw. Play Again";
  msg.style.backgroundColor = "rgb(16, 16, 89)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userCounters.innerText = userScore;
        msg.innerText = `You Win! Your Choice ${userChoice} beats Comp Choice ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userCounters.innerText("0",+1);  
    }
    else{
        compScore ++;
        compCounter.innerText = compScore;
        msg.innerText = `You Lost! Comp beat your choice ${userChoice} with ${compChoice}`;
        msg.style.backgroundColor = "Red";
        compCounter.innerText("0",+1); 
    }
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice == compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "Paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
        userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

