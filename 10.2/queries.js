/* 3-INSERTING ANIMALS 
 * ===================================================== */

// An example of animals you can insert into the zoo db
// =================================================================

use zoo
db.animals.insert({"name":"Panda", "numlegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"})
db.animals.insert({"name":"Dog", "numlegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"})
db.animals.insert({"name":"Lion", "numlegs":4, "class":"mammal", "weight": 300, "whatIWouldReallyCallIt":"Grumbles"})
db.animals.insert({"name":"Zebra", "numlegs":4, "class":"mammal", "weight": 500, "whatIWouldReallyCallIt":"Stripes"})
db.animals.insert({"name":"Chameleon", "numlegs":4, "class":"Reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"})


//extra code examples I added, these work
//1 is ascending and -1 is decending
db.myanimals.find().sort({_id:1})
db.myanimals.find().sort({_id:-1})

db.myanimals.find().sort({numlegs:1}).pretty()
db.myanimals.find().sort({numlegs:-1})


// find everything 
db.mycollection.find(function (err, docs) {
    // docs is an array of all the documents in mycollection 
})
 
// find everything, but sort by name 
db.mycollection.find().sort({name: 1}, function (err, docs) {
    // docs is now a sorted array 
})