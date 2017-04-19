// Initialize Firebase (YOUR OWN APP)
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



// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot) {}
 // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
  database.ref().on("value", function(snapshot) {

    // Then we console.log the value of snapshot
    console.log(snapshot.val());

    // Then we change the html associated with the number.
    $("#click-Value").html(snapshot.val().clickCount);

    // Then update the clickCounter variable with data from the database. 
    clickCounter = snapshot.val().clickCount;
// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________


// Change the HTML using jQuery to reflect the updated clickCounter value
 $("#click-Value").html(clickCounter);

  // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  // Again we could have named errorObject anything we wanted. 
  }, function (errorObject) {

    // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
  
  });

// Inside our .on function...

// Console.log the initial "snapshot" value (the object itself)


// Change the initial value to reflect the initial value in Firebase
// HINT: snapshot.val().__________





// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
database.ref().set({
        clickCount: clickCounter
      });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});