// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Cat", "Lion", "Wolf", "Tiger"];
for (var i = 0; i <= 3; i++) {
    console.log(animals[i]);
}
for (var i = 0; i <= 3; i++) {
    if (animals[i] == "Cat") {
        console.log("".concat(animals[i], "is a very sweet animal and as well  as very human friendly as well."));
    }
    else if (animals[i] == "Lion") {
        console.log("".concat(animals[i], " is a very Dangerous and bloody animal. "));
    }
    else if (animals[i] == "Wolf") {
        console.log("".concat(animals[i], " is the national animal of Turkey."));
    }
    else {
        console.log("".concat(animals[i], " has a very Beautiful print on his Skin."));
    }
}
console.log("All these animals are Carnivorous i.e those who eat meat.");
console.log("Cat could be taken as a pet");
