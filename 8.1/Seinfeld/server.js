var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM actors order by id", function(err, result) {
    var html = "<h1> Actors Ordered BY ID </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + " </li>";
      html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/coolness-chart", function(req, res) {
  connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {
    var html = "<h1> Actors by Coolness </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + " </li>";
      html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/attitude-chart/:att", function(req, res) {
  connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {
    var html = "<h1> Actors With an Attitude of " + req.params.att + "</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + " </li>";
      html += "<p> Coolness Points: " + result[i].coolness_points + " </p>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});


// Initiate the listener.
app.listen(port);