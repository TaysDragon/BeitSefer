var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Find songs by artist", "Find all artists who appear more than once",
      "Find data within a specific range", "Search for a specific song", "Was the artist's song and album in the charts at the time of their release"]
  }).then(function(answer) {

    switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;

        case "Was the artist's song and album in the charts at the time of their release":
        songAlbumSearch();
        break;
    }
  });
};

var artistSearch = function() {
  inquirer.prompt({
    name: "artist",
    type: "input",
    message: "What artist would you like to search for?"
  }).then(function(answer) {
    var query = "SELECT position, song, year FROM top5000 WHERE ?";
    connection.query(query, { artist: answer.artist }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
      }
      runSearch();
    });
  });
};

var multiSearch = function() {
  var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  });
};

var rangeSearch = function() {
  inquirer.prompt([{
    name: "start",
    type: "input",
    message: "Enter starting position: ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }, {
    name: "end",
    type: "input",
    message: "Enter ending position: ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer) {
    var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
    connection.query(query, [answer.start, answer.end], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song
          + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
      }
      runSearch();
    });
  });
};

var songSearch = function() {
  inquirer.prompt({
    name: "song",
    type: "input",
    message: "What song would you like to look for?"
  }).then(function(answer) {
    console.log(answer.song);
    connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
      console.log("Position: " + res[0].position + " || Song: " + res[0].song
        + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
      runSearch();
    });
  });
};




// It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist's song and album made it into the charts at the time of their release.

var songAlbumSearch = function() {
  inquirer.prompt({
    name: "songAlbum",
    type: "input",
    message: "Was the artist's song and album in the charts at the time of their release, which artist would you like to look for?"
  }).then(function(answer) {
    console.log(answer.songAlbum);
    connection.query("SELECT * FROM top5000 A INNER JOIN TopAlbums B ON A.key = B.key", { song: answer.songAlbum }, function(err, res) {
      console.log("Position: " + res[0].position + " || Song: " + res[0].songAlbum
        + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
      runSearch();
    });
  });
};

