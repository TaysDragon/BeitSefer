// Instructions

// Refactor the slacked-out code to use the shorthand variable declaration syntax.

// Likewise, re-factor the code to use ES6 object destructuring.

// As always, confirm that the code still works exactly like it did before you re-factored it.

// BONUS : Use Sets and Maps in your re-factor! And research when you would use a Set or a Map over an Object or an Array.


const Programmer(name, lang, skillLevel){
    let data = {name, lang, skillLevel};
};

let mrDerp = Programmer("Derp","PHP",70);
let derpJr = Programmer("Junior","Ruby",35);
let leDerpThe2nd = Programmer("Herp Le Derpington","Haskel",58);

var programmerOffice = [] = [mrDerp, derpJr, leDerpThe2nd]
// programmerOffice.push(mrDerp);
// programmerOffice.push(derpJr);
// programmerOffice.push(leDerpThe2nd);

var projectManager = {
    name:"Le Bob Del Mareera the 11th",
    age:897,
    skills:["Centuries of tradition","Knowledge","Every martial art known to man"],
    weaknesses:["Sunlight","Human interaction"]
};

var bossName =  projectManager.name;
var bossAge = projectManager.age;
//feel free to use ES6 template literals and let/const in your refactor too!
console.log(bossName + " will henceforth be managing this project. He has " + bossAge + " years of experience.");
