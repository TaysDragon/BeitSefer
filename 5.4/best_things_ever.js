// fs allows node to read and write files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

for (var i=0; i<dataArr.length; i++);
  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});