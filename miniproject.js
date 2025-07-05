let userScore =0;
let compScore =0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#com-score");

const drawgame = () => {
    
    msg.innerHTML="Game was draw.Play agian!";
    msg.style.backgroundColor="#081b31"
    
};


const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerHTML = userScore;
        msg.innerHTML="You Win!";
        msg.style.backgroundColor = "green";         
    }else{
        compScore++;
        compScorepara.innerHTML = compScore;
        msg.innerHTML="You loss!";
        msg.style.backgroundColor ="red";
    };
};

const genComChoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame =(userChoice)=>{
    
    const compChoice=genComChoice();
    

    if(userChoice === compChoice){
        drawgame();
    }else {
        let userWin=true;
        if(userChoice ==="rock"){
            userWin=compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper"){
            userWin=compChoice ==="scissors" ? false : true;
        }else{
            userWin=compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});