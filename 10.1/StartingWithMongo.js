/* 18.1.2-Starting with Mongo JS
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// A. Use the command line to create a classroom database. 
use classroomdb
// Insert entries for yourself and the people in your row in a students collection. 
// Each document should have:

// 1. A field of name with the person's name.
// 2. A field of rownumber which will contain the row number that they are in.
// 3. A field of os which will contain the Operating System 
//    of the computer they are using: 'Mac', 'Win', etc
// 4. A field of hobbies with an array of the hobbies the person likes to do.
db.students.insert({"name": "Sharon", "rownumber": 1, "majorcities": "Windows", hobbies: ["zone pushing", "gardening"]})


// B. Use find commands to get:
// 1. A list of everyone in your row.
db.students.find({row:1}).pretty()

// 2. An entry for a single person.

// 3. The entries for all the Mac users in your row. 

// Bonus:
// If you finish early, check out the MongoDB documentation 
// and figure out how to find users by an entry in an array.


db.students.find({});

/* 18.1.4 - Updates, Deletes and Drops
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */

// Go back to your classroom database.
use students
// 1. You've decided to take on a new hobby. 
// Add Extreme Basketweaving to your array of hobbies.
db.students.update({"hobbies": "Morocco"}, {$push: {"continent":"Antartica"}})
// 2. While practicing for your Extreme Basketweaving Competition, 
// you broke the computer of the person next to you. 
// They're using a new Operating System now. Change their os field.

// 3. Another student in your row saw you break that computer 
// and wisely decided to move. Remove them from your database.

// 4. You are worried everyone else will leave 
// and you'll have to sit all alone. 
// You decide to bribe everyone who didn't leave with candy.
// Add a field of gavecandy with a value of false to everyone in the array 
// so you can keep track.

// 5. All this work made you hungry, so you bought yourself some candy. 
// Change the value of gavecandy to true in your entry.
