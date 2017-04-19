var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM songs", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
  console.log("-----------------------------------");
});

connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
});

connection.query("INSERT INTO songs SET ?", {title:"I Want you back", artist:"Jackson 5", genre:"pop"}, function(err, res) {
    
    console.log("-----------------------------------");

});

connection.query("DELETE FROM songs WHERE title = 'Yellow Submarine'", function(err, res) {
    
    console.log("-----------------------------------");

});

connection.query("SELECT * FROM songs", function(err, res) {
  if (err) throw err;
  console.log(res);
});

console.log("-----------------------------------");