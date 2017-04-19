// Core node package for reading and writing files
var fs = require("fs");

//Global variables
var total = 0;
var deposit = "";
var withdraw = "";
var lotto = [-0.25, +2];
var input = process.argv[1];

if (process.argv[2] === "total") {
	fs.readFile("bank.txt", "utf8", function(error, data) {
		// We will then print the contents of data
		console.log(data);

		// Then split it by commas (to make it more readable)
		var dataArr = data.split(",");

		for (var i = 0; i < dataArr.length; i++) {
			result += arr[i];
			// We will then re-display the content as an array for later use.

			console.log(total);

		}
	})
}

if ((process.argv[0]) === "deposit") {
	return (dataArr.reduce) + (parseFloat(process.argv[1]); 
}else if ((process.argv[0]) === "withdraw") {
	return (dataArr.reduce) - (parseFloat(process.argv[1]);
}else if ((process.argv[0]) === "lotto") {
(total) + (Math.round(Math.random() * (lotto.length - 1)));}
