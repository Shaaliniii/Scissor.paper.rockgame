let choices = document.querySelectorAll('.choice');
let userScoree = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let msg = document.querySelector('#msg-container');
let restart = document.querySelector('#restart');

let userScore = 0;
let computerScore = 0;

let computergenerate = () => {
     let values = ["rock","paper","scissor"];
    let randomIdx = ( Math.floor(Math.random()*3));
    return values[randomIdx];
}
restart.addEventListener('click', () => {
    userScore=0;
    computerScore=0;
    userScoree.innerHTML = userScore;
    compScore.innerHTML = computerScore;
});

choices.forEach(choice => choice.addEventListener('click', () => {
    let userChoice = choice.id;
    console.log("user choice : ",userChoice);
    let compChoice=computergenerate();
    console.log("Computer choice:",compChoice);
    if(userChoice === compChoice){
        msg.innerHTML = "It's a tie";
      }
    else if(userChoice === "rock"){
         if(compChoice === "paper"){
           msg.innerHTML = "Computer wins,paper covers rock";
           computerScore++;
           compScore.innerHTML = computerScore;
         }
         else{
           msg.innerHTML = "User wins,rock smashes scissor";
           userScore++;
           userScoree.innerHTML = userScore;
         }
       }
    else if(userChoice === "paper"){
         if(compChoice === "rock"){
           msg.innerHTML = "User wins,paper covers rock";
           userScore++;
           userScoree.innerHTML = userScore;
         }
         else{
           msg.innerHTML = "Computer wins,scissor cuts paper";
           computerScore++;
           compScore.innerHTML = computerScore;
         }
       }
    else if(userChoice === "scissor"){
         if(compChoice === "rock"){
           msg.innerHTML = "Computer wins,rock smashes scissor";
           computerScore++;
           compScore.innerHTML = computerScore;
         }
         else{
           msg.innerHTML = "User wins,scissor cuts paper";
           userScore++;
           userScoree.innerHTML = userScore;
         }
       }

      }
));
