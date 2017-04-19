//   Instructions

// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

// Your "Programmer" constructor should be able to take in the following information...

// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a "Programmer" object and call the method to print its contents



// constructor function which can take in a series of values and create objects
// with the properties contained inside
function Programmer(name, profession, age, faveLang) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.faveLang = faveLang;

  // method which prints all of the stats for a character
  this.printInfo = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nAge: " + this.age + "\nfaveLang: " + this.faveLang);
    console.log("\n-------------\n");
  };
}

// creates two unique characters using the "character" constructor
var newprog = new Programmer("Sharon Oud", "Supreme CodeMaster", 97, "Python");

// calls the printInfo method for bob to print all of his information to the console
newprog.printInfo();

