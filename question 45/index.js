"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function car (manufacturer:string,modelname:string,...optional:[string,any][])
// {let car:[key:string]:any= {
//     manufacturer:manufacturer,
//     model:modelname,
// }
// optional.forEach((key,value)=>{
//     car[key]=value;
// });
// return car;
// }
// let Cars=car("toyota","2025",["Color","Green"],["Sunroof",true],["chasis no",1239098])
// console.log(Cars)
function createCar(manufacturer, model, ...options) {
    // Create the car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Calling the function with required and additional information
const carInfo = createCar('Toyota', 'Camry', ['color', 'blue'], ['sunroof', true]);
// Printing the returned object to verify the information
console.log(carInfo);
