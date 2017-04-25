// Dependencies- node modules needed
// =============================================================
//npm install express, require for simple server
var express = require("express");
//npm install body-parser
var bodyParser = require("body-parser");
//npm install --save path
var path = require("path");
//npm install http-server -g
var http = require("http");


// Sets up the Express App
// =============================================================
var app = express();  //must include part of the express pack, makes server
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Tables already reserved (DATA)
// =============================================================
var tables = [{
  routeName: "customer1",
  name: "Yoda",
  phone: 900,
  email: "email1@such.com",
  id: 100
}, {
  routeName: "customer2",
  name: "Darth Maul",
  phone: 900,
  email: "email2@such.com",
  id: 101
}, {
  routeName: "customer3",
  name: "Obi Wan Kenobi",
  phone: 900,
  email: "email3@such.com",
  id: 102
}];



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page, these are needed to make the server
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }

//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening- also required to make the simple server
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
