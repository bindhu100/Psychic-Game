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
    document.getElementById("guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
}

// Guesses so far - to display the letter which one user enter

var userGuessSoFar = function(){
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessSoFar.join(', ');
}

countGuessesLeft();

// for restarting the game

var restart = function(){
    guessesLeft = 9;
    guessSoFar = [];
    coputerGuess = computerAlphabet [Math.floor(Math.random() *computerAlphabet.length)]; 

}

// when user enter a key
document.onkeyup = function(event){
    guessesLeft--; 

    var userGuess = event.key.toUpperCase();
    guessSoFar.push(userGuess);
    countGuessesLeft();
    userGuessSoFar();

    // wins - if computer guess and user guess are matching
    if (userGuess === coputerGuess){
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        restart();
    }

    // losses - if computer guesses and user guess is are matching
    else if(guessesLeft === 0){
        losses++;

        document.getElementById("losses").innerHTML = "Losses: " + losses;
        restart();
    }
};

