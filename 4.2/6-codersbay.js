// Initialize Firebase
var config = {
      apiKey: "AIzaSyBAkoxUfX-424p8B8O_Wv5yACQiBntehsE",
    authDomain: "clicker-f6bec.firebaseapp.com",
    databaseURL: "https://clicker-f6bec.firebaseio.com",
    storageBucket: "clicker-f6bec.appspot.com",
    messagingSenderId: "457645128619"
    };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
highBidder = highPrice;

    // Change the HTML to reflect the initial value
 // Firebase is always watching for changes to the data.
    // When changes occurs it will print them to console and html
    database.ref().on("value", function(snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().highPrice);
      console.log(snapshot.val().highBidder);

      // Change the HTML
      $("#highest-bidder").html(snapshot.val().highBidder); 
        $("#highest-price").html(snapshot.val().highPrice);

      
    // Print the initial data to the console.


  

  // Keep the initial variables for highBidder equal to the initial values
  }else {

    // Change the HTML to reflect the initial value


    // Print the initial data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
