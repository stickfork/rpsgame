// Define variables:
let choice = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let userScore = 0;
let roundNum = 0;


// Function: allows the computer to randomly output rock, paper or scissors
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}







// Function: two parameters, player selection & computer selection
  // Outlines win-tie-lose condition + who gets a score + message
function playRound(playerSelection, computerSelection) {
    roundNum++;
    if (playerSelection == computerSelection) {
        message.textContent = `Tie! Play again`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
                playerSelection == 'Paper' && computerSelection == 'Rock' ||
                playerSelection == 'Scissors' && computerSelection == 'Paper') {
        userScore++;
        message.textContent = `You win! ${playerSelection} > ${computerSelection}`;
    } else {
        computerScore++;
        message.textContent = `You lose! ${computerSelection} > ${playerSelection}`;
    } 
}   



// Function: The actual game is played for 5 rounds (starting @ 1 ending @ 5). 
    // It keeps a tally score and generates a message depending on if you win-tie-lose..
// (i=1; i < 6; i++) = start at one, end at 5, go up by increments of one ..

/* function game() {

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt('Rock, paper or scissors?'.toLowerCase());
        const computerSelection = getComputerChoice(choice);
        console.log('Round ' + i);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log('Your score = ' + userScore);
        console.log('Computer\'s score = ' + computerScore);
    } if (userScore > computerScore) {
        return (`You win! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    } else if (userScore < computerScore) {
        return (`You lose! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    } else {
        return (`Tie! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    }
} */

function game(playerSelection) {

    for (let i = 1; i++;) {
        const computerSelection = getComputerChoice(choice);
        console.log(playRound(playerSelection, computerSelection));
        
        roundNo.textContent = 'Round' + ' ' + roundNum;
        fighterSelection.textContent = '👩 = ' + playerSelection + ' | ' + computerSelection + ' = 🤖';
        scoreBoard.textContent = '👩 ' + userScore + ' : ' + computerScore + ' 🤖';
        break;
    } if (userScore > computerScore) {
        return (`You win! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    } else if (userScore < computerScore) {
        return (`You lose! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    } else {
        return (`Tie! Your score = ${userScore} || Computer\'s score = ${computerScore}`);
    }
}




//  EVENT LISTENERS

const rock = document.querySelector('#rock');

rock.addEventListener('click', function() {
    let playerSelection = 'Rock';
    console.log(game(playerSelection));
});

const paper = document.querySelector('#paper');

paper.addEventListener('click', function() {
    const playerSelection = 'Paper';
    console.log(game(playerSelection));
});

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', function() {
    const playerSelection = 'Scissors';
    console.log(game(playerSelection));
});

// displaying the score
const roundNo = document.querySelector('#roundNo');
const fighterSelection = document.querySelector('#fighterSelection');
const message = document.querySelector('#message');
const scoreBoard = document.querySelector('#scoreBoard');