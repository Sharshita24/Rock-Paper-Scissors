let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    msg.innerText="Game was draw, play again!";
    msg.style.backgroundColor="#d6d42f";
    msg.style.color="black";
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("User choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }

    else if((userChoice === "rock" && compChoice === "scissors")||(userChoice === "paper" && compChoice === "rock")||(userChoice === "scissors" && compChoice === "paper")){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="Green";
        msg.style.color="white";
        
    }

    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Lose"
        msg.style.backgroundColor="Red";
        msg.style.color="white";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id"); 
    playGame(userChoice);
  })
});