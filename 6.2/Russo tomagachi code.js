const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry) {
            console.log('That was yummy!');
            this.hungry = false;
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function() {
        if (this.sleepy) {
            console.log('Zzzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function() {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function() {
        this.age++;
        console.log("Happy birthday to me! I'm "+this.age+" years old!");    
    };
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
    console.log('Woof! Woof!');
};

dog.goOutside = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
    } else {
        console.log("We're already outside though...");
    }
};

dog.goInside = function() {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside dumbass.");
    }
};

var cat = new DigitalPal();

cat.houseCondition = 100;
cat.meow = function() {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("Muahahahahaha! Fuck yo couch!");
        this.bored = false;
        this.sleepy = true;
    }
};

cat.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

function playWithPets() {
    
    rl.question("Interact with your pet: ", (answer) => {
    var userCommands = answer.split(" ");
    var userCommand1 = userCommands[0];
    var userCommand2 = userCommands[1];
    var whichPet;
    var noise;
    var isDog = false;
    var isCat = false;
    var isValidPet = false;

    switch (userCommand1) {
        case ('exit') :
            rl.close();
            process.exit();
            break;
        case ('dog') :
            whichPet = dog;
            noise = whichPet.bark();
            isCat = false;
            isDog = true;
            break;
        case ('cat') :
            whichPet = cat;
            isDog = false;
            isCat = true;
            noise = whichPet.meow();
            break;
        default : 
            console.log("you don't have one of those pets");
            isValidPet = false;
    }
    if (isValidPet) {
        switch (userCommand2) {
            case ('feed') :
                whichPet.feed();
                break;
            case ('sleep') :
                whichPet.sleep();
                break;
            case ('play') :
                whichPet.play();
                break;
            case ('speak') :
                noise;
                break;
            case ('outside') :
                if (isDog) {
                    whichPet.goOutside();
                } else {
                    console.log("The cat can't go outside.");
                }
                break;
            case ('inside') :
                if (isDog) {
                    whichPet.goInside();
                } else {
                    console.log("The cat is always inside unfortunatley.");
                }
                break;
            case ('destroy') :
                if (isCat) {
                    whichPet.destroyFurniture();
                } else {
                    console.log("The dog isn't a piece of shit like the cat.");
                }
                break;
            case ('remodel') :
                whichPet.buyNewFurniture();
                break;
            default : 
                console.log("Sorry, I don't know how to do that.");
        } 
    }
    playWithPets();
});
}

playWithPets();




