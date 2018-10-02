var game = {
    wins : 0,
    numberOfGuessesRemaining : 10,
    lettersGuessed : "",
    currentPlayer : {},
    wordDisplay : "",
    isWinner : false,
    players : [
        {
            fullName: "Tom Brady",
            imageLocation: "assets/images/tom_brady.png"
        },
        {
            fullName: "Drew Brees",
            imageLocation: "assets/images/drew_brees.png"
        },
        {
            fullName: "Ezekiel Elliot",
            imageLocation: "assets/images/ezekiel_elliot.png"
        },
        {
            fullName: "Antonio Brown",
            imageLocation: "assets/images/antonio_brown.png"
        },
        {
            fullName: "Andrew Luck",
            imageLocation: "assets/images/andrew_luck.png"
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
        this.lettersGuessed = "";
        this.currentPlayer = this.getNewPlayer();
        this.numberOfGuessesRemaining = 10;
        this.isWinner = false;
        this.wordDisplay = mask(this.currentPlayer.fullName);
        this.updateHTML();
        this.displayImage(this.currentPlayer.imageLocation);
    },
    /**
     * 
     * @param {*} userInput 
     * 
     * Updates the following depending if the letter exists or not:
     * If letter exists: 
     *      - The word display
     *      - The number of wins - if the player guesses all the letters
     *      - Plays audio indicating a correct letter was guessed
     * 
     * If letter doesn't exist:
     *      - The number of guesses is decremented
     */
    updateGame : function(userInput) {

        // append the user input the letters guessed
        this.lettersGuessed = this.lettersGuessed + userInput;

        // updates the display if the user guessed a correct
        // letter, otherwise the word display remains unchaged
        var wordDisplayUpdated = this.updateWordDisplay(userInput);

        if(wordDisplayUpdated) {

            // play audio when the user guesses a correct letter
            this.playAudio("assets/audio/Touchdown!.mp4");

            //check to see if the user one
            if (this.isWordGuessed()) {
                this.isWinner = true;
                this.wins++;
                this.displayImage(assets/images/question-mark-face.jpg);
            }
        }
        // user guessed a letter that does not exist so we need to 
        // decrement the number of guesses remaing by 1
        else {
            this.numberOfGuessesRemaining--;
        }
    },
    /**
     * 
     * @param {*} userInput 
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
     * Plays a quick soundbite
     */
    playAudio : function(audioLocation) {
        var audio = new Audio(audioLocation);
        audio.play();
    },
    displayImage : function(imageLocation) {
        document.getElementById("player-image").src = imageLocation;
    },
    isValidInput : function(userInput) {
        var isValid = true;
        // if the letter was already guessed display an alert box
        if (getIndicesOf(userInput, this.lettersGuessed).length > 0) {
            alert("'" + userInput + "' " + "was already guessed");
            isValid = false;
        }
         // invalid input, display an alert message
        else if(!isLetter(userInput)) {
            alert("'" + userInput + "' " + "is invalid")
            isValid = false;
        }
       
        return isValid;
    },
    updateHTML : function() {
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("current-word").innerHTML = this.wordDisplay;
        document.getElementById("guesses-remaining").innerHTML = this.numberOfGuessesRemaining;
        document.getElementById("letters-guessed").innerHTML = this.lettersGuessed;
    },
    /**
     * Writes all variables to the console. Utility method for debugging
     */
    logOutput : function() {
        console.log("currentPlayer: " + this.currentPlayer.fullName);
        console.log("wins: " + this.wins);
        console.log("numberOfGuessesRemaining: " + this.numberOfGuessesRemaining);
        console.log("wordDisplay: " + this.wordDisplay);
        console.log("isWinner: " + this.isWinner);
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

        if (game.numberOfGuessesRemaining === 0 || game.isWinner) {
        game.startNewGame();
        }

        // Determines which key was pressed.
        var userInput = event.key;

        if(game.isValidInput(userInput)) {
            game.updateGame(userInput);
            game.updateHTML();
            // using this for debugging
            game.logOutput();
        }
    }

}

/************************************* Start Game ***************************************************/
