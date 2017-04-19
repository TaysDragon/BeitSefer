// Solution 1 - More Obvious
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
  console.log(true);
}
else {
  console.log(false);
}

// Solution 2 - Simplified (Re-factored)
console.log(process.argv[2] === process.argv[3]);



//x and y are both integers
var remainder = process.argv[2] % 7;
if (remainder == 0){
//x is a multiple of y
} else {
//x is not a multiple of y
}
