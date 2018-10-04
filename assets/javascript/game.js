var game = {
    wins : 0,
    numberOfGuessesRemaining : 10,
    lettersGuessed : [],
    currentPlayer : {},
    wordDisplay : "",
    isGameOver : false,
    players : [
        {
            fullName: "TOM BRADY",
            imageLocation: "assets/images/tom_brady.png"
        },
        {
            fullName: "DREW BREES",
            imageLocation: "assets/images/drew_brees.png"
        },
        {
            fullName: "EZEKIEL ELLIOT",
            imageLocation: "assets/images/ezekiel_elliot.png"
        },
        {
            fullName: "ANTONIO BROWN",
            imageLocation: "assets/images/antonio_brown.png"
        },
        {
            fullName: "ANDREW LUCK",
            imageLocation: "assets/images/andrew_luck.png"
        },
        {
            fullName: "KAREEM HUNT",
            imageLocation: "assets/images/kareem_hunt.png"
        },
        {
            fullName: "TODD GURLEY",
            imageLocation: "assets/images/todd_gurley.png"
        },
        {
            fullName: "AARON RODGERS",
            imageLocation: "assets/images/aaron_rogers.png"
        },
        {
            fullName: "ALVIN KAMARA",
            imageLocation: "assets/images/alvin_kaxsmara.png"
        },
        {
            fullName: "MELVIN GORDON",
            imageLocation: "assets/images/melvin_gordon.png"
        },
        {
            fullName: "ADAM THIELEN",
            imageLocation: "assets/images/adam_thielen.png"
        },
        {
            fullName: "SAQUON BARKLEY",
            imageLocation: "assets/images/saquon_barkley.png"
        },
        {
            fullName: "GOLDEN TATE",
            imageLocation: "assets/images/golden_tate.png"
        },
        {
            fullName: "DEANDRE HOPKINS",
            imageLocation: "assets/images/deandre_hopkins.png"
        },
        {
            fullName: "JULIO JONES",
            imageLocation: "assets/images/julio_jones.png"
        },
        {
            fullName: "ROB GRONKOWSKI",
            imageLocation: "assets/images/rob_gronkowski.png"
        },
        {
            fullName: "TRAVIS KELCE",
            imageLocation: "assets/images/travis_kelce.png"
        },
        {
            fullName: "DAVANTE ADAMS",
            imageLocation: "assets/images/davante_adams.png"
        },
        {
            fullName: "CAM NEWTON",
            imageLocation: "assets/images/cam_newton.png"
        },
        {
            fullName: "SONY MICHEL",
            imageLocation: "assets/images/sony_michel.png"
        },
    ],
    /**
     * @returns a randomly selected player
     * 
     * Randomly selects a player from the list of players
     */
    getNewPlayer : function() {
        // random number between 0 and the number of player. This will be used as the 
        // index to retrieve a player from the players array
        var index = Math.floor(Math.random() * this.players.length);
        return this.players[index];
    },
    /**
     * Resets the variables for a new game
     */
    startNewGame : function() {
        this.lettersGuessed = [];
        this.currentPlayer = this.getNewPlayer();
        this.numberOfGuessesRemaining = 10;
        this.isGameOver = false;
        this.wordDisplay = mask(this.currentPlayer.fullName);
        this.updateHTML();
        this.displayImage("assets/images/question-mark-face.jpg");
    },
    /**
     * 
     * @param {String} userInput 
     * 
     * Updates the following depending if the letter exists or not:
     * If letter exists: 
     *      - The word display
     *      - The number of wins - if the player guesses the nfl player
     *      - Plays audio - if the player guesses the correct nfl player
     * 
     * If letter doesn't exist:
     *      - The number of guesses is decremented
     */
    updateGame : function(userInput) {

        // add the user input to the lettersGuessed array
        this.lettersGuessed.push(userInput);

        // updates the display if the user guessed a correct
        // letter, otherwise the word display remains unchaged
        var wordDisplayUpdated = this.updateWordDisplay(userInput);

        if(wordDisplayUpdated) {
            //check to see if the user won
            if (this.isWordGuessed()) {
                // play audio when the user guesses the player
                this.playAudio("assets/audio/Touchdown!.mp4");
                this.isGameOver = true;
                this.wins++; 
                this.displayImage(this.currentPlayer.imageLocation);
            }
        }
        // user guessed a letter that does not exist so we need to 
        // decrement the number of guesses remaing by 1
        else {
            this.numberOfGuessesRemaining--;
            if (this.numberOfGuessesRemaining === 0)
            {
                this.isGameOver = true;
                this.displayImage("assets/images/game_over.jpg")
            }
        }
    },
    /**
     * 
     * @param {String} userInput 
     * 
     * Looks at the userInput and searches the players name for
     * a match. If a match is found, the word display is updated
     * with the user inputted letter wherever it occurs in the users name
     * 
     * For example: @param userInput = 'a'
     *              currentPlayer = Tom Brady
     *              current WordDisplay = T _ _ / B _ _ _ Y
     *              new WordDisplay = T _ _ / B _ A _ Y
     */
     updateWordDisplay : function(userInput) {

        var wordDisplayUpdated = false;

        // contains all indicies of the guessed letter in the players name
        var indicies = getIndicesOf(userInput, this.currentPlayer.fullName);

        // user guessed a letter that exists
        if (indicies.length > 0) {
            // update the wordDisplay
            this.wordDisplay = replaceAt(this.wordDisplay, indicies, userInput);
            wordDisplayUpdated = true;
        }

        return wordDisplayUpdated;
    },
    /**
     * If there are no more occurences of '_' the user has guessed all of 
     * the letters the user wins and the win count is incremented
     */
    isWordGuessed : function() {
        return (0 === getIndicesOf("_", this.wordDisplay).length);
    },
    /**
     * @param {String} audioLocation - the location
     * of the mp3 file
     * 
     * Plays a soundbite at the specified location
     */
    playAudio : function(audioLocation) {
        var audio = new Audio(audioLocation);
        audio.play();
    },
    /**
     * @param {String} imageLocation
     * 
     * Displays an image at the specified location 
     */
    displayImage : function(imageLocation) {
        document.getElementById("player-image").src = imageLocation;
    },
    /**
     * @param {String} userInput 
     * @returns boolean indicating if the input is 
     * valid or not
     * 
     * Invalid Input - is not a letter, or the letter
     * was already guessed. Otherwise, the input is valid
     */
    isValidInput : function(userInput) {
        var isValid = true;
         // invalid input, display an alert message
        if(!isLetter(userInput)) {
            alert("'" + userInput + "' " + "is invalid")
            isValid = false;
        }
        // user already guessed the inputted letter, display an alert message
        // notifying them of this
        else if (this.lettersGuessed.indexOf(userInput.toUpperCase()) > -1) {
            alert("'" + userInput + "' " + "was already guessed");
            isValid = false;
        }
       
        return isValid;
    },
    /**
     * Updates the HTML on the page
     */
    updateHTML : function() {
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("current-word").innerHTML = this.wordDisplay;
        document.getElementById("guesses-remaining").innerHTML = this.numberOfGuessesRemaining;
        // removes commas from array
        document.getElementById("letters-guessed").innerHTML = this.lettersGuessed.join("");
    },
    /**
     * Writes all variables to the console. Utility method for debugging
     */
    logOutput : function() {
        console.log("currentPlayer: " + this.currentPlayer.fullName);
        console.log("wins: " + this.wins);
        console.log("numberOfGuessesRemaining: " + this.numberOfGuessesRemaining);
        console.log("wordDisplay: " + this.wordDisplay);
        console.log("isGameOver: " + this.isGameOver);
        console.log("lettersGuessed: " + this.lettersGuessed);
        console.log("========================================================")
    },
};

/************************************* Start Game ***************************************************/

/**
 * This needs to be part of the window.onload event so that the DOM has been loaded prior to 
 * this function running.
 */
window.onload = function() {

    // whenever the page is loaded, we start a new game
    game.startNewGame();

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        if (game.numberOfGuessesRemaining === 0 || game.isGameOver) {
            game.startNewGame();
        }

        // Determines which key was pressed.
        var userInput = event.key;

        if(game.isValidInput(userInput)) {
            // if valid uppercase the user input
            game.updateGame(userInput.toUpperCase());
            game.updateHTML();
            // using this for debugging
            game.logOutput();
        }
    }
}
/************************************* Start Game ***************************************************/
