var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//  whenever the user presses a key
document.onkeyup = function(){
    // // Randomly chooses a choice from the options array. Computer guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     
    // // Determines which key was pressed
    var userGuess = event.key;
    var yourGuess = userGuess;

    // // Randomly chooses a choice from the options array. user guess.
    if (userGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]){
        if (userGuess === computerGuess){
            wins++;  
        }

        else if (userGuess)
    }



}
