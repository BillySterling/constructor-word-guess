/*index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
  * Randomly selects a word and uses the `Word` constructor to store it
  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`
*/

// appreciating the help of my project-mate Sarah Kinneer when I hit a mental brick wall on multi-word (i.e. "New York") responses...

var Word = require("./Word.js");
// Load the NPM Package inquirer
var inquirer = require("inquirer");

function playGame(){
    var wordArray = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","district of columbia","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","montana","nebraska","nevada","new hampshire","new jersey","new mexico","new york","north carolina","north dakota","ohio","oklahoma","oregon","maryland","massachusetts","michigan","minnesota","mississippi","missouri","pennsylvania","rhode island","south carolina","south dakota","tennessee","texas","utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"];
    var letterCheck = /^[a-z]$/; //Regex to test for valid letter input

    var totalGuesses = 5;

    console.log("\nWelcome to the GUESS THE STATE Game.  You Have " + totalGuesses + " Attempts to Guess the Word\n");
    var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)]
//    console.log(chosenWord);
    debugger;
    gameWord = new Word(chosenWord)
    // console.log(gameWord)
    gameWord.makeWord();
    debugger;

    for (var i = 0; i < gameWord.letterArr.length; i++) {
        if (!letterCheck.test(gameWord.letterArr[i].letter)) {
            console.log(gameWord.letterArr[i].letter);
            gameWord.letterArr[i].guessed = true;
            console.log(gameWord.letterArr[i].guessed);
        };
   };

    gameWord.dispWord()
    debugger;

    promptUser();

    function promptUser() {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "guess"
            }
        ]).then(function (response){
            debugger;
            response.guess = response.guess.toLowerCase();

    // validate user input
            if (totalGuesses >= 1) {
                gameWord.makeGuess(response.guess);
            }
    // set initially to false   
            var letterInWord = false;

            for (var i = 0; i < gameWord.letterArr.length; i++) {
                if (response.guess === gameWord.letterArr[i].letter) {
                    letterInWord = true;
                }
            }
            if (letterInWord) {
                console.log("Correct!") }
                else {
                    console.log("Incorrect, try again!");
                    totalGuesses--;
                }
            debugger;
            gameWord.dispWord();
            debugger;

            matchLetter = false;
            for (var i=0; i < gameWord.letterArr.length; i++){
                if (gameWord.letterArr[i].guessed === false){
                    matchLetter = true;
                } 
            }

            if (!matchLetter) {
                gameWord.dispWord();
                console.log("You Won!");
                replayGame();
                } else {
                    gameWord.dispWord()
                    if (totalGuesses === 0) {
                        console.log("You Lost!");
                        replayGame();
                    } else {
                        promptUser();
                    }
                }
        });
    };
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