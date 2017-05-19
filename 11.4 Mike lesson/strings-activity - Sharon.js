// Instructions

// Refactor the slacked-out code to use ES6 template strings instead regular quote marks.

// Confirm that the code still works exactly like it did before you re-factored it.


let personA = "Derp";
let personB = "Derpette";
let personC = "Derpingtion";
let personD = "Derpina";

console.log(`${personA}  said to ${personB} , We should learn Python!.`);
console.log(`However, ${personC} said NO! WE NEED MOAR JAVASCRIPT! .`);

const teachPython =(first,second)=>
    `${first} is teaching ${second} how to Python all the things!`;


let resultText = teachPython(personD, personB);

console.log("Today " + resultText);

function nameSearch(name,charToSearch){
    if(name.indexOf(charToSearch)>=0){
        return true;
    }else{
        return false;
    }
};

nameSearch(personA,"D");
nameSearch(personB,"i");
