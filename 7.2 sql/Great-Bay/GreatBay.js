var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "greatbay"
});

// Initial Values
var Product = "";
var Price = 0;
var nowBid = 0;
var highestBid = 0;
var id = 0;

//Confirm connection is active
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// At the initial load, get a snapshot of the current data.
connection.query("SELECT * FROM items", function(err, res) {
  if (err) throw err;
  console.log(res);
});



 
// instantiate 
var table = new Table({
    head: ['Price', 'nowBid', 'HighestBid', 'id']
  , colWidths: [15, 15, 15, 15]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends 
table.push(
    ['First value', 'Second value'],
    ['First value', 'Second value']
);
 
console.log(table.toString());


// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Would you like to",
    choices: ["POST AN ITEM", "BID ON AN ITEM"],
    name: "action"
  },

  {
    type: "input",
    message: "What is your product?",
    name: "product"
  },

  {
    type: "input",
    message: "What is your item price?",
    name: "price"
  },

   {
    type: "input",
    message: "What is your bid price?",
    name: "nowBid"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure?",
    name: "confirm",
    default: true

  }


//CREATE TABLE Items(Product VARCHAR(20), Price DECIMAL(11,2), nowBid DECIMAL(7,2), HighestBid DECIMAL(7,2), id integer(20) AUTO_INCREMENT NOT NULL, PRIMARY KEY (id)

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Pick: " + user.action);
    console.log("Your product " + user.product + " costs: $" + user.price);
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {
  	// Alert
    alert("Sorry that bid is too low. Try again.");
  }

});