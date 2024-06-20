let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");
const userScoreElem = document.querySelector("#Your-score");
const compScoreElem = document.querySelector("#Comp-score");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "It's a Draw! Play Again!";
    msg.style.backgroundColor = "black";
    msg.classList.add('fade-in');
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreElem.innerText = userScore;
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreElem.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
    msg.classList.add('fade-in');
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const endGame = () => {
    let finalMessage = '';
    if (userScore > compScore) {
        finalMessage = 'Game Over! You are the final winner!';
    } else if (compScore > userScore) {
        finalMessage = 'Game Over! Computer is the final winner!';
    } else {
        finalMessage = 'Game Over! It\'s a draw!';
    }
    msg.innerText = finalMessage;
    msg.style.backgroundColor = "purple";
    msg.classList.add('fade-in');
};

const restartGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreElem.innerText = userScore;
    compScoreElem.innerText = compScore;
    msg.innerText = 'Play your move';
    msg.style.backgroundColor = 'black';
    msg.classList.add('fade-in');
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});

endGameBtn.addEventListener("click", endGame);
restartBtn.addEventListener("click", restartGame);
