"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, modelname, ...optional) {
    let car = {
        manufacturer: manufacturer,
        model: modelname
    };
    optional.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
let Cars = car("toyota", "2025", ["Color", "Green"], ["Sunroof", true], ["chasis no", 1239098]);
console.log(Cars);
