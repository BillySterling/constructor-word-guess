/*index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`
*/

var Word = require("./Word.js");
// Load the NPM Package inquirer
var inquirer = require("inquirer");

playHangman()

function playHangman() {
    var wordArr = ["cat", "dog"];
    var numGuesses = 10;
    var chosenWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    var gameWord = new Word(chosenWord);
    gameWord.makeWord();
    var letterCheck = /^[a-z]$/ //Regex to test for valid letter input

    function promptUser () {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Choose a Letter:"
        }]).then(function(response) { 
            myGuess = response.guess.toLowerCase();
            if (letterCheck.test(myGuess)) {
                if (numGuess >= 1 )  {
                    gameWord.getGuess(myGuess);
                }
            } else {
                console.log("Invalid Response!");
            }


    }


}
