var game = {
    wins : 0,
    numberOfGuessesRemaining : 10,
    lettersGuessed : [],
    currentPlayer : {},
    wordDisplay : "",
    isGameOver : false,
    // need a more elegant solution instead of creating a new object for every player
    players : [
        {
            fullName: "TOM BRADY",
            imageLocation: "assets/images/tom_brady.png",
            playerId: 4314,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "DREW BREES",
            imageLocation: "assets/images/drew_brees.png",
            playerId: 7242,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "EZEKIEL ELLIOT",
            imageLocation: "assets/images/ezekiel_elliot.png",
            playerId: 17923,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""

        },
        {
            fullName: "ANTONIO BROWN",
            imageLocation: "assets/images/antonio_brown.png",
            playerId: 11056,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "ANDREW LUCK",
            imageLocation: "assets/images/andrew_luck.png",
            playerId: 14008,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "KAREEM HUNT",
            imageLocation: "assets/images/kareem_hunt.png",
            playerId: 18944,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "TODD GURLEY",
            imageLocation: "assets/images/todd_gurley.png",
            playerId: 16771,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "AARON RODGERS",
            imageLocation: "assets/images/aaron_rodgers.png",
            playerId: 2593,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "ALVIN KAMARA",
            imageLocation: "assets/images/alvin_kamara.png",
            playerId: 18878,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "MELVIN GORDON",
            imageLocation: "assets/images/melvin_gordon.png",
            playerId: 16776,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "ADAM THIELEN",
            imageLocation: "assets/images/adam_thielen.png",
            playerId: 15534,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "SAQUON BARKLEY",
            imageLocation: "assets/images/saquon_barkley.png",
            playerId: 19766,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "GOLDEN TATE",
            imageLocation: "assets/images/golden_tate.png",
            playerId: 11611,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "DEANDRE HOPKINS",
            imageLocation: "assets/images/deandre_hopkins.png",
            playerId: 14986,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "JULIO JONES",
            imageLocation: "assets/images/julio_jones.png",
            playerId: 13291,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "ROB GRONKOWSKI",
            imageLocation: "assets/images/rob_gronkowski.png",
            playerId: 10974,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "TRAVIS KELCE",
            imageLocation: "assets/images/travis_kelce.png",
            playerId: 15048,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "DAVANTE ADAMS",
            imageLocation: "assets/images/davante_adams.png",
            playerId: 16470,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "CAM NEWTON",
            imageLocation: "assets/images/cam_newton.png",
            playerId: 13320,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
        },
        {
            fullName: "SONY MICHEL",
            imageLocation: "assets/images/sony_michel.png",
            playerId: 19828,
            team: "",
            number: "",
            position: "",
            gamesPlayed: "",
            passingYards: "",
            passingTouchdowns: "",
            interceptions: "",
            rushingAttempts: "",
            rushingYards: "",
            rushingTouchdowns: "",
            receptions: "",
            receivingYards: "",
            receivingTouchdowns: "",
            fumblesLost: "",
            fantasyPointsPPR: ""
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
     *      - Displays the players stats
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
                this.retrievePlayerData();
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
     * Retrieves stats about the current player via an ajax call. This
     * is the only part of the application where I used jQuery. I made the call
     * synchronous although I know this is frowned up.
     * 
     * TODO: 
     * 
     * - Need to understand why my ajax call does not have scope to global
     * variables.
     * 
     * - Need to put in some error handling in case the ajax call is unsucessful
     */
    retrievePlayerData: function() {
        var currentPlayer = this.currentPlayer;
        var callback = this.mapPlayerData;
        $.ajax({
            url: "https://api.fantasydata.net/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2018/" + 
            this.currentPlayer.playerId,
            // api keys (unique to my account) - this should not be in the source code
            headers: { 'Ocp-Apim-Subscription-Key': '0f4c5936b24a49d4b8e7b9f6e1c6c81c' },
            async: false,
            success: function(result) {
                callback(result[0], currentPlayer);
            }
        });
    },
    /**
     * Maps player data onto the current player
     */
    mapPlayerData : function(result, currentPlayer){
        currentPlayer.team = result.Team;
        currentPlayer.number = result.Number;
        currentPlayer.position = result.Position;
        currentPlayer.gamesPlayed = result.Played
        currentPlayer.passingYards = result.PassingYards;
        currentPlayer.passingTouchdowns = result.PassingTouchdowns;
        currentPlayer.interceptions = result.PassingInterceptions;
        currentPlayer.rushingAttempts = result.RushingAttempts;
        currentPlayer.rushingYards = result.RushingYards;
        currentPlayer.rushingTouchdowns = result.RushingTouchdowns;
        currentPlayer.receptions = result.Receptions;
        currentPlayer.receivingYards = result.ReceivingYards;
        currentPlayer.receivingTouchdowns = result.ReceivingTouchdowns;
        currentPlayer.fumblesLost = result.FumblesLost;
        currentPlayer.fantasyPointsPPR = result.FantasyPointsPPR;
        return currentPlayer;
    },
    /**
     * Updates the HTML on the page
     */
    updateHTML : function() {
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("current-word").innerHTML = this.wordDisplay;
        document.getElementById("guesses-remaining").innerHTML = this.numberOfGuessesRemaining;
        document.getElementById("letters-guessed").innerHTML = this.lettersGuessed;
        document.getElementById("player-stats").style.display = "none";
        // removes commas from array
        if(this.isWordGuessed()){
            document.getElementById("team").innerHTML = this.currentPlayer.team;
            document.getElementById("jersey-number").innerHTML = this.currentPlayer.number;
            document.getElementById("position").innerHTML = this.currentPlayer.position;
            document.getElementById("games-played").innerHTML = this.currentPlayer.gamesPlayed;
            document.getElementById("passing-yards").innerHTML = this.currentPlayer.passingYards;
            document.getElementById("passing-touchdowns").innerHTML = this.currentPlayer.passingTouchdowns;
            document.getElementById("interceptions").innerHTML = this.currentPlayer.interceptions;
            document.getElementById("rushing-attempts").innerHTML = this.currentPlayer.rushingAttempts;
            document.getElementById("rushing-yards").innerHTML = this.currentPlayer.rushingYards;
            document.getElementById("rushing-touchdowns").innerHTML = this.currentPlayer.rushingTouchdowns;
            document.getElementById("receptions").innerHTML = this.currentPlayer.receptions;
            document.getElementById("receiving-yards").innerHTML = this.currentPlayer.receivingYards;
            document.getElementById("receiving-touchdowns").innerHTML = this.currentPlayer.receivingTouchdowns;
            document.getElementById("fumbles-lost").innerHTML = this.currentPlayer.fumblesLost;
            document.getElementById("fantasy-points-ppr").innerHTML = this.currentPlayer.fantasyPointsPPR;
            document.getElementById("player-stats").style.display = "block";
        }
    },
    /**
     * Writes all variables to the console. Utility method for debugging
     */
    logOutput : function() {
        console.log("currentPlayer Name: " + this.currentPlayer.fullName);
        console.log("currentPlayer ID: " + this.currentPlayer.playerId);
        console.log("currentPlayer Position: " + this.currentPlayer.position);
        console.log("currentPlayer Team: " + this.currentPlayer.team);
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