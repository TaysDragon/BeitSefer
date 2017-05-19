// Instructions

// Replace references to function with an arrow function where applicable.

// Confirm that the code still works exactly like it did before you re-factored it.



const fizzBuzz(){
    for(let i=1;i<101;i++){
        if(i%15===0){
            console.log("fizzBuzz!");
        }else if(i%5===0){
            console.log("buzz!");
        }else if (i%3===0){
            console.log("fizz!");
        }else{
            console.log(i);
        }
    }
};

fizzBuzz();

function createNewUser(name,attack){
    var name = name;
    var attack = attack;
    const newUserObj = {
        name:name,
        attack:attack,
        printStats()=>{  //I was wrong for changing this one, would cause it to remain unchanged
            console.log(this.name + " has " + this.attack + " attack power!");
        },
        yell()=>{
            console.log("MY SECRET POWER IS PROGRAMMING AND CAFFEINE!");
        }
    }
    return newUserObj;
}

let bob = new createNewUser("bob",47);
console.log(bob);
bob.yell();
bob.printStats();


