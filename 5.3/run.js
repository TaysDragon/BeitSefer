// Using the require keyword lets us access all of the exports
// in our ess.js file
var bands = require("./bands.js");
var bandList = bands.bands;
var genre = process.argv[2];

// This will print everything in exports.
for (var key in bandList) {
	console.log("A"+ key + " band is " + bandList[key] + ".");
}
console.log(bandList);
console.log(bands);
console.log(bands.genre[key]);


