//import http module
var http = require("http");

//give port number to use
var PORT1 = 7030;
var PORT2 = 5080;

//make a function for good comments
function GoodSay(request, response) {
	response.end("Have a good day!");
}


//make a function for bad comments
function BadSay(request, response){
	response.end("Go away!  Grrrrr  We will send bears to your home if you do not leave NOW!")
}


//make the server with node
var server1 = http.createServer(GoodSay);

//start the server to listen to user input
server1.listen(PORT1, function(){

//this is triggered when user goes to that port
console.log("Server is listening on: http://localhost:%s", PORT1)

});

//make server 2 with node
var server2 = http.createServer(BadSay);

//start listener
server2.listen(PORT2, function(){

	//this is triggerd when the user goes to the port
	console.log("Server is listening on: http://localhost:%s", PORT2)
	});
