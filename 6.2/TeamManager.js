// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmer objects
function Player(name, position, offense, defense, goodGame, badGame) {
  this.name = name;
  this.position = position;
  this.offense = 0;
  this.defense = 0;
}

//GoodGame: Method which increases either the player's offense or defense property based upon a coinflip.
//BadGame: Method which decreases either the player's offense or defense property based upon a coinflip.
  function playRound() {
// Assign a random damage value for the round.
      var offense = Math.floor(Math.random() * 2) + 1;

      // The zombie should choose a random number.
      var defense = Math.floor((Math.random() * 2)) + 1;
      
// Subtract the damage amount from the zombie's health.
        playerOffense -= offense;
        playerDefense -= defense;
      }

//PrintStats: Method which prints all of the player's properties to the screen
Player.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nOffense: " + this.offense + "\nDefense: " + this.defense);
  console.log("---------------");
};

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var programmerArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 8) {
    console.log("New Player");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your player's name?"
      }, {
        name: "position",
        message: "What is your player's position?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newGuy = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // pushes newguy object into our array
      programmerArray.push(newGuy);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < programmerArray.length; x++) {
      programmerArray[x].printInfo();
    }
  }
};

// call askQuestion to run our code
askQuestion();
