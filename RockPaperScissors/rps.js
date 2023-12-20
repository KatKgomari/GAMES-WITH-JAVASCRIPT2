
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice;
let computerChoice;
let computerChoiceNumber;
let resultStatement;
let userScore = 0;
let computerScore =0;


userScoreDisplay.innerHTML = userScore;
computerScoreDisplay.innerHTML = computerScore;

const possibleChoices = document.querySelectorAll('button');
const allDivs = document.querySelectorAll('div');

possibleChoices.forEach(possibleChoice =>
    possibleChoice.addEventListener('click', (e)=>
    {
        userChoice = e.target.id;

        userChoiceDisplay.innerHTML = null;
        const userPlay = document.createElement('img');
        userPlay.setAttribute('width','30vw' );
        switch (userChoice){
            case "Rock":
                userPlay.setAttribute('src', 'rock-PhotoRoom.png-PhotoRoom.png');
                break;
            case "Paper":
                userPlay.setAttribute('src', 'paper-PhotoRoom.png-PhotoRoom.png');
                break;
            case "Scissors":
                userPlay.setAttribute('src', 'scissors-PhotoRoom.png-PhotoRoom.png');
                userPlay.setAttribute('width','26vw' ); //So that it's size does not make the div bigger
                break;
        }
        userChoiceDisplay.appendChild(userPlay);

        generateComputerChoice(); 
        computerChoiceDisplay.innerHTML = null;
        const computerPlay = document.createElement('img');
        computerPlay.setAttribute('width','30vw' );
        switch (computerChoice){
            case "Rock":
                computerPlay.setAttribute('src', 'rock-PhotoRoom.png-PhotoRoom.png');
                break;
            case "Paper":
                computerPlay.setAttribute('src', 'paper-PhotoRoom.png-PhotoRoom.png');
                break;
            case "Scissors":
                computerPlay.setAttribute('src', 'scissors-PhotoRoom.png-PhotoRoom.png');
                computerPlay.setAttribute('width','26vw' );
                break;
        }
        computerChoiceDisplay.appendChild(computerPlay);
        
        getResults();
        resultDisplay.innerHTML = resultStatement;
        
}))

    
    
function generateComputerChoice(){
    computerChoiceNumber = Math.floor(Math.random()*3); // Or you can use possibleChoices.length
    console.log(computerChoiceNumber);
    switch(computerChoiceNumber){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        }
        
    }


function getResults(){
    let result; 

    if(userChoice == computerChoice){
        result = "draw";
    }    
    else if((userChoice == "Rock" && computerChoice == "Paper") ||(userChoice == "Paper" && computerChoice == "Scissors") || (userChoice == "Scissors" && computerChoice == "Rock")){
        result = "loss";
        
    }
    else{
        result = "win";
    }

    switch (result){
        case "draw":
            resultStatement = "It's a draw!";
            allDivs.forEach(div =>
            div.style.backgroundColor = "#ffd700"); //yellow
            break;
        case "loss":
            resultStatement = "You lose!";
            allDivs.forEach(div =>
            div.style.backgroundColor = "#ff0000"); //red
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
            break;
        case "win":
            resultStatement = "You win!";
            allDivs.forEach(div =>
            div.style.backgroundColor = "#008000");//green
            userScore++;
            userScoreDisplay.innerHTML = userScore;
            break;

    }
}