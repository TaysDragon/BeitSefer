// Instructions

// Refactor the slacked-out code to use the rest and spread operators

// Likewise, re-factor the code to use ES6 default parameters whenever possible.

// As always, confirm that the code still works exactly like it did before you re-factored it.


function concatArgs() {
    var newString ="";
    for (var i=0; i < arguments.length; i++) {
        newString += arguments[i];
    };
    console.log(newString);
};

concatArgs("Hello ", "darkness ", "my ", "old ", "friend.");

function deliciousPizza(meat,cheese,crust){
    var meat = meat || "Pepperroni";
    var cheese = cheese || "Mozarella";
    var crust = crust || "Thin";
    var aWildPizza = {
        meat:meat,
        cheese:cheese,
        crust:crust
    };
    return aWildPizza;
};

//Please, for the love of everything holy and sacred, re-factor this awful block of code to accept ES6 function syntax, template strings, and object destructuring.
var lunchOrder = new deliciousPizza("Ham and Bacon", "Cheddar");
console.log("I'm having a " + lunchOrder.meat + " pizza with " + lunchOrder.cheese +  " Cheese and a " + lunchOrder.crust + " crust for lunch!"); 

function iCanHazArrays(arr2,dee2){
    var finalArray = []
    for (var i=0; i<arr2.length; i++){
        finalArray.push(arr2[i]);
    };
    for (var z=0; z<dee2.length; z++){
        finalArray.push(dee2[z]);
    };
    return finalArray;
};

var muchConcat = iCanHazArrays(["R",2],["D",2]);
console.log(muchConcat);

var a=50;
var b=a;


b=100
// a still = 50

var x ={name:"anna", like:"javscreipt"};
x.name ould return anna
var y=x
will return anna
y.name="jillian"
// look at video around 4:37