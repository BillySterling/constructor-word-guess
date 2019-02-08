/*index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
  * Randomly selects a word and uses the `Word` constructor to store it
  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`
*/

var Word = require("./Word.js");
// Load the NPM Package inquirer
var inquirer = require("inquirer");

var wordArray = ["north dakota", "utah"]
//var wordArray = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","district of columbia","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","montana","nebraska","nevada","new hampshire","new jersey","new mexico","new york","north carolina","north dakota","ohio","oklahoma","oregon","maryland","massachusetts","michigan","minnesota","mississippi","missouri","pennsylvania","rhode island","south carolina","south dakota","tennessee","texas","utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"]

var usedGuesses = 0;
var totalGuesses = 5;
var correctGuesses = 0;
var remGuesses = 0;
var matchLetter = false;
var chosenWord = ""
var gameWord = ""

//var letterCheck = /^[a-z]$/ //Regex to test for valid letter input

function playGame(){
    console.log("\nWelcome to the GUESS THE STATE Game.  You Have " + totalGuesses + " Attempts to Guess the Word\n");
    chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    console.log(chosenWord);
    debugger;
    gameWord = new Word(chosenWord)
    // console.log(gameWord)
    gameWord.makeWord();
    gameWord.dispWord()
    
//    for (var i = 0; i < gameWord.letterArr.length; i++) {
//        if (!letterCheck.test(gameWord.letterArr[i].char)) {
//            gameWord.letterArr[i].guessed = true;
//        }
//    }

    debugger;
    getGuess()
}

function getGuess(){
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "guess"
        }
    ]).then(function (response){
        debugger;
        response.guess = response.guess.toLowerCase();
        gameWord.makeGuess(response.guess)
        gameWord.dispWord()
        debugger;
        matchLetter = false;
        for (i=0; i < gameWord.getWord.length; i++){
            if (response.guess === gameWord.getWord[i]){
                correctGuesses ++
                matchLetter = true;
            } 
        }
        if (!matchLetter) {
            usedGuesses ++
            remGuesses = (totalGuesses - usedGuesses);
            console.log("Nope! You Have " + remGuesses + " Guesses Remaining. Try again\n");
        } else {
            remGuesses = (totalGuesses - usedGuesses);
            console.log("Correct! You Have " + remGuesses + " Guesses Remaining.\n");
        };
        debugger;
        if (usedGuesses < totalGuesses && correctGuesses < gameWord.getWord.length){
            getGuess()
        } else if (usedGuesses === totalGuesses){
            console.log("No More Guesses! The correct answer is " + gameWord.getWord + "\n\n")
            replayGame()
        } else if (correctGuesses === gameWord.getWord.length){
            console.log("You won!  You Guessed " + correctGuesses + " Times\n\n")
            replayGame()
        }
    });
};

function replayGame(){

    inquirer.prompt([
        {
            type: "list",
            message: "Want to play again?",
            choices: ["Again", "Exit"],
            name: "again"
        }
    ]).then(function(response) {
        if (response.again === "Again") {
            console.log("\nHere's your new word to guess:");
            debugger;
            usedGuesses = 0;
            correctGuesses = 0;
            chosenWord = "";
            gameWord = "";
            playGame();
        } else {
            console.log("\nGoodbye!\n");
        }
    });
};

playGame();