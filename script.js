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

function playRoundWithButtons(e) {    

//variable to hold the results & user response of the game
let result;
let msg

// confirm user's choice
const playerSelection = this.textContent.toLowerCase()


// confirm pc's choice
const pcSelection = pcPlay()
    
// logic for winning/losing/tie-ing

// tie case
if (playerSelection === pcSelection) {
    result = 'tie'
    msg = `The computer also chose ${playerSelection}, it's a ${result}!`


// winning cases
} else if ( (playerSelection === 'rock' && pcSelection === 'scissors') ||
            (playerSelection === 'paper' && pcSelection === 'rock') ||
            (playerSelection === 'scissors' && pcSelection === 'paper')) {
    result = 'win'
    msg = `The computer chose ${pcSelection}, you ${result}!`

} else {
    result = 'lose'
    msg = `The computer chose ${pcSelection}, you ${result}!`
}

// pass msg to result div
console.log(document.querySelector('.result').textContent = msg)

return result
}

// function game() {
//     // play five rounds of rps
//     let userWins = 0
//     let pcWins = 0
//     let roundsPlayed = 0

//     // set condition for continuing the game
//     keepPlaying = true
//     while(keepPlaying) {

//         // confirm user would like to continue playing
//         userChoice = userPlay()
//         if (userChoice) {
//             // play round of game
//             result = playRound(userChoice, computerPlay())
        
//             // update score
//             if (result === 'user') {++userWins};
//             if (result === 'pc') {++pcWins};
//             ++roundsPlayed
        
//             // stop game after five rounds
//             if (roundsPlayed >= 5)
//                 keepPlaying = false
//         } else {
//             // stop game as user selected 'cancel'
//             keepPlaying = false
//             alert('game ended')
//         }
//     }

//     // summarize results of the game
//     if (roundsPlayed) {
//         let summary = `User Wins: ${userWins}\nPC Wins: ${pcWins}\nTies: ${roundsPlayed - userWins - pcWins}`
//         let status = (userWins === pcWins) ? "It's a tie!" : (userWins > pcWins) ? "You won!" : "You lost!"      
//         alert(`${status}\n\n${summary}`)        
//     }
// }

const btns = document.querySelectorAll('button')
btns.forEach(btn => btn.addEventListener('click', playRoundWithButtons));