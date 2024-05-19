"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Apple", "Bananas", "Apricot"];
if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apple.");
}
else {
    console.log(`Appple is not in your favourite_fruits list.`);
}
if (favorite_fruits.includes("Bananas")) {
    console.log("I really like Bananas.");
}
else {
    console.log(`Bananas is not in your favourite_fruits list.`);
}
if (favorite_fruits.includes("Apricot")) {
    console.log("I really like Apricot.");
}
else {
    console.log(`Apricot is not in your favourite_fruits list.`);
}
if (favorite_fruits.includes("Melon")) {
    console.log("I really like Melon.");
}
else {
    console.log(`Melon is not in your favourite_fruits list.`);
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("I really like Watermelon.");
}
else {
    console.log(`Watermelon is not in your favourite_fruits list.`);
}
