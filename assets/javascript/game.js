var computerAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables for tracking the game result
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = [];
// var letterGuessComp = null;

 // computer pick random letters from computerAlphabet arry
 var coputerGuess = computerAlphabet [Math.floor(Math.random() *computerAlphabet.length)];

// Guesses Left
var countGuessesLeft = function (){
    document.querySelector("#guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
}

// Guesses so far

var userGuessSoFar = function(){
    document.querySelector("#guesses").innerHTML = "Guesses so far:" + guessSoFar.join(' ');
}

// countGuessesLeft();

// To restart the game

var restart = function(){
    guessesLeft = 9;
    guessSoFar = [];
    coputerGuess = computerAlphabet [Math.floor(Math.random() *computerAlphabet.length)]; 

}

// when user enter a key
document.onkeyup = function(event){
    guessesLeft--; 

    var userGuess = event.key;
    guessSoFar.push(userGuess);
    countGuessesLeft();
    userGuessSoFar();

    // wins
    if (userGuess === coputerGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        restart();
    }

    // losses
    else if(guessesLeft === 0){
        losses++;

        document.querySelector("#losses").innerHTML = "Losses:" + losses;
        restart();
    }
};

