////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	if (move===null || undefined){
		move = getInput();
	}
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   if (move===null || undefined){
		move = randomPlay();
	}
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

	switch (playerMove){
		case 'rock':
			if (computerMove ==='rock') winner = 'tie';
			if (computerMove ==='paper') winner = 'computer';
			if (computerMove ==='scissors') winner = 'player';
		break;

		case 'paper':
			if (computerMove ==='rock') winner = 'player';
			if (computerMove ==='paper') winner = 'tie';
			if (computerMove ==='scissors') winner = 'computer';

		case 'scissors':
			if (computerMove ==='rock') winner = 'computer';
			if (computerMove ==='paper') winner = 'player';
			if (computerMove ==='scissors') winner = 'tie';
		break;
		default: 
			winner = 'Chuck Norris';
	}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
	var playerMove;
	var computerMove;
	var winner;
	while (computerWins<5 && playerWins <5){
		playerMove=getPlayerMove(null);
		computerMove=getComputerMove(null);
		winner = getWinner(playerMove, computerMove);
		if (winner =='computer'){
			 computerWins++;
			console.log("computer won");
		}
		if(winner =='player'){
			playerWins++;
			console.log("you won");
		if (winner=='Chuck Norris') console.log("Chuck Norris just kicked you in the face");
		
	}
    return [playerWins, computerWins];
}

