"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userarr = ["Anas", "Abdullah", "Admin", "Subhan", "Haris", "Waqas"];
let arrayindex = userarr.length - 1;
for (let i = 0; i <= 5; i++) {
    if (userarr[i] === "Admin") {
        console.log(`HEllo! ${userarr[i]} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ! ${userarr[i]} thank you for logging in.`);
    }
}
//  QUESTION : 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the onmessage We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (userarr.length != 0) {
    console.log(`The list of usernames is not empty.`);
}
userarr.splice(0, 7);
if (userarr.length != 0) {
    console.log(`The list of usernames is not empty.`);
}
else {
    console.log(` As the list is now empty ;We need to find some Users !`);
}
