// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// Load the fs package to read and write
var fs = require("fs");

// The second will be the amount that will be added, withdrawn, etc.
var value = process.argv[2];
var numArray = [];

  // We will read the existing bank file
  fs.readFile("sort.txt", "utf8", function(err, data) {

    // Break down all the numbers inside
    data = data.split(", ");
    
    // Loop through those numbers and sort.
    for (var i = 0; i < data.length; i++) {
      if (parseFloat(data[i])) {
        result += parseFloat(data[i]);
      }
    }

    // We will then print the final balance rounded to two decimal places.
    console.log(sort);
  });
}