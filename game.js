/*index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
  * Randomly selects a word and uses the `Word` constructor to store it
  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/

var Word = require("./Word.js");
// Load the NPM Package inquirer
var inquirer = require("inquirer");
var numGuesses = 0;
var correctGuesses = 0;

function playGame() {
    var wordArr = ["cat", "dog"];
    var numGuesses = 10;
    // Randomly selects a word and uses the `Word` constructor to store it
    var chosenWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    var gameWord = new Word(chosenWord);
    gameWord.makeWord();
    gameWord.display();

    var letterCheck = /^[a-z]$/ //Regex to test for valid letter input

    function getGuess () {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Choose a Letter:"
            }
        ]).then(function(response) { 
            myGuess = response.guess.toLowerCase();
            if (letterCheck.test(myGuess)) {
                //check numGuess >= 1, if not (i.e. =0) then game over
                if (numGuesses >= 1 )  {
                    gameWord.getGuess(myGuess);
                    }
                } else {
                    console.log("Invalid Response!");
            }

        });

    }
}

playGame();

function restartGame(){
    numGuesses = 10;
    correctGuesses = 0;
    chosenWord = ""
    gameWord = ""
    startGame()
}
