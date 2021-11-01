// initialize global variables
let userWins = 0
let pcWins = 0
let ties = 0
let roundsPlayed = 0
let msg = 'Choose your weapon'
document.querySelector('.round-result').textContent = msg

function resetGame() {
    userWins = 0
    pcWins = 0
    ties = 0
    roundsPlayed = 0
    
    document.querySelector('#player-score').textContent = undefined
    document.querySelector('#pc-score').textContent = undefined
    document.querySelector('#ties-value').textContent = undefined    
    document.querySelector('.round-result').textContent = msg
}

function update_score(round_result) {
    // establish variables
    let score;
    let scoreId;

    // determine round result, update score value & set the correct column for updating
    switch (round_result) {
        case 'user':
            score = ++userWins
            scoreId = '#player-score'
            break;
        case 'pc':
            score = ++pcWins
            scoreId = '#pc-score'
            break;
        case 'tie':
            score = ++ties
            scoreId = '#ties-value'
            break;
    }

    // reset column that should be updated
    const container = document.querySelector(scoreId)
    container.innerHTML = '';


    // create 'full rows' for the score column
    for (i = Math.floor(score/5); i > 0; i--) {
        let fullRow = document.createElement('p')
        fullRow.setAttribute('style', 'text-decoration: line-through')
        fullRow.textContent = '||||'
        container.appendChild(fullRow); 
    }   

    // create any 'paratial rows' for the score column
    let partialRow = document.createElement('p')
    container.appendChild(partialRow)
    let text = ''
    for (i = Math.floor(score % 5); i > 0; i--) {
        partialRow.textContent += '|'
    }
    
}

function pcPlay() {
    // randomly choose a game object for the computer
    choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// pre-ui function
function userPlay() {
    // confirm the user's game object
    
    //set a variable to keep the while loop running until a valid choice is made
    invalid = true
    
    while(invalid) {
        //capture user's selection
        // response = prompt("Choose 'rock', 'paper' or 'scissors'")

        // verify users's selection is valid & if so break the loop (clicking 'cancel' gives a 'null' response)
        if (response === null || choices.includes(response.toLowerCase())) {
            invalid = false
        // if choice is invalid, remind user of the valid options
        } else {
            alert("Your choice must by 'rock', 'paper' or 'scissors'")
        }
    }
    return response
}

//pre-ui function
function playRound(playerSelection, computerSelection) {    
    
    //variable to hold the results of the game
    let result;
    
    // logic for winning/losing/tie-ing
    // tie case
    if (playerSelection === computerSelection) {
        // console.log(`the computer also chose ${playerSelection}!`)
        result = "it's a tie"
        // result = 'tie'
    
    // winning cases
    } else if ( (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = `You win! ${playerSelection} beats ${computerSelection}!`
        // result = 'user'

    } else {
        result = (`You lose! ${computerSelection} beats ${playerSelection}!`)
        // result = 'pc'
    }
    return result
}


function playRoundWithButtons() {    

//variable to hold the results & user response of the game
let result;
let msg;

// confirm user's choice
const playerSelection = this.textContent.toLowerCase()


// confirm pc's choice
const pcSelection = pcPlay()
    
// logic for winning/losing/tie-ing

// tie case
if (playerSelection === pcSelection) {
    result = 'tie'
    msg = `The computer also chose ${playerSelection}, it's a tie!`

// winning cases
} else if ( (playerSelection === 'rock' && pcSelection === 'scissors') ||
            (playerSelection === 'paper' && pcSelection === 'rock') ||
            (playerSelection === 'scissors' && pcSelection === 'paper')) {
    result = 'user'
    msg = `The computer chose ${pcSelection}, you win!`

} else {
    result = 'pc'
    msg = `The computer chose ${pcSelection}, you lose!`
}

// pass msg to result div
console.log(document.querySelector('.round-result').textContent = msg)

// update roundsPlayed
++roundsPlayed

// update score
update_score(result)

// stop game once a player reaches five wins
if (userWins == 5 || pcWins == 5 ) {
    alert(`Game over, ${(userWins > pcWins) ? 'you': 'the PC'} won after ${roundsPlayed} rounds!\n\n`)
    resetGame()
}

}

// function game(e) {
//     console.log(this)
    
//     // set condition for continuing the game
//     keepPlaying = true
//     while(keepPlaying) {

//         // play round of game
//         result = playRoundWithButtons(e)
        
//         // update score
//         if (result === 'user') {++userWins};
//         if (result === 'pc') {++pcWins};
//         ++roundsPlayed
    
//         // stop game once a player reaches five wins
//         if (userWins === 5 || pcWins === 5)
//             keepPlaying = false
//             alert(`Game over, ${(userWins > pcWins) ? 'you': 'the PC'} won after ${roundsPlayed} rounds!\n\n`)
        
//     }
// }

const btns = document.querySelectorAll('button')
btns.forEach(btn => btn.addEventListener('click', playRoundWithButtons))
