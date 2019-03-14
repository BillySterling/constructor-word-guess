# Constructor-Word-Guess CLI Game

Creating a Word Guess command-line game using advanced JavaScript and Node.js (with emphasis on constructors).

## Criteria

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. The solution will have three files:

* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **game.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

  * the logic will disallow letters selected previously


## Packages Required:

Interactive Command Line User Interfaces:
[Inquirer](https://www.npmjs.com/package/inquirer)

## Installation

In order to run this application locally you will need to install the following npm packages (as referenced above):

* npm install inquirer

## Usage

`node game.js`

game.js CLI will greet you and prompt you to begin guessing the letter for one of the 50 states of the USA.  A pattern of dashes will represent the state name to be guessed.  You will have eight attempts to guess the name.  If a correct letter is guessed the letter will populate in the array of dashes.  Incorrect guesses will result in an error and the guess count will decrement.  If you don't guess the state name in the alloted number of guesses you lose.  At the end of the game you will have the option to play again or exit.

