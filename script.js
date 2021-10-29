choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    // randomly choose a game object for the computer
    return choices[Math.floor(Math.random() * choices.length)]
}

function userPlay() {
    // confirm the user's game object
    
    //set a variable to keep the while loop running until a valid choice is made
    invalid = true
    
    while(invalid) {
        //capture user's selection
        response = prompt("Choose 'rock', 'paper' or 'scissors'")

        // verify users's selection is a valid choice & if so break the loop (clicking 'cancel' gives a 'null' response)
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
    let result = undefined
    
    // logic for winning/losing/tie-ing

    // tie case
    if (playerSelection === computerSelection) {
        console.log(`the computer also chose ${playerSelection}!`)
        result = 'tie'
    
    // winning cases
    } else if ( (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        result = 'user'

    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        result = 'pc'
    }
    return result
}
     
function game() {
    // play five rounds of rps
    let userWins = 0
    let pcWins = 0
    let roundsPlayed = 0

    // set condition for continuing the game
    keepPlaying = true
    while(keepPlaying) {

        // confirm user would like to continue playing
        userChoice = userPlay()
        if (userChoice) {
            // play round of game
            result = playRound(userChoice, computerPlay())
        
            // update score
            if (result === 'user') {++userWins};
            if (result === 'pc') {++pcWins};
            ++roundsPlayed
        
            // stop game after five rounds
            if (roundsPlayed >= 5)
                keepPlaying = false
        } else {
            // stop game as user selected 'cancel'
            keepPlaying = false
            alert('game ended')
        }
    
    }

    if (roundsPlayed) {
        if (userWins != pcWins) {alert(`you won ${userWins} out of ${roundsPlayed} games.`)
        } else {alert(`you and the computer both won ${userWins} games`)}
    }
}

game()