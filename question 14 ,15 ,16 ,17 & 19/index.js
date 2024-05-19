"use strict";
// Q 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let invitedpeople = ["Abbu", "Ammi", "Bushra Khala"];
invitedpeople.map((name) => { console.log(`Assalmaulauikum ${name}!, I hope this Invitation finds you in the best of your health, this invitation is basically to get the honour to have your presence in the dinner I have Arranged for you`); });
// Q 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // // • Print a second set of invitation messages, one for each person who is still in your list.
// console.log(invitedpeople)
let cannotattend = "Bushra Khala";
// console.log(`${cannotattend} unfortunately cannot attend the dinner`)
// invitedpeople[invitedpeople.indexOf(cannotattend)]="Afsheen Bhabi"
// console.log(invitedpeople)
// invitedpeople.map((name)=>{console.log(`Assalamualaikum ${name}!, I hope this Invitation finds you in the best of your health, this invitation is basically to get the honour to have your presence in the dinner I have Arranged for you`)})
//  Q 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// console.log(invitedpeople)
cannotattend = "Bushra Khala";
// console.log(`${cannotattend} unfortunately cannot attend the dinner`)
invitedpeople[invitedpeople.indexOf(cannotattend)] = "Afsheen Bhabi";
// console.log(invitedpeople)
// invitedpeople.map((name)=>{console.log(`Assalamualaikum ${name}!, I hope this Invitation finds you in the best of your health, this invitation is basically to get the honour to have your presence in the dinner I have Arranged for you`)})
// invitedpeople.map((name)=>{console.log(`Assalamualaikum ${name}!, A great news for you all is that I have arragend a bigger table for dinner`)})
invitedpeople.unshift("Governer Sindh");
invitedpeople.splice(3, 0, "Sir Daniyal");
invitedpeople.push("Sir Imran");
// console.log(invitedpeople)
// invitedpeople.map((name)=>{console.log(`Assalamualaikum ${name}!, I hope this Invitation finds you in the best of your health, this invitation is basically to get the honour to have your presence in the dinner I have Arranged for you`)})
//  Q 17 :Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
invitedpeople.map((name) => {
    console.log(`Assalamualaikum ${name}!, I hope this Invitation finds you in the best of your health, this invitation is basically to get the honour to have your presence in the dinner I have Arranged for you`);
});
console.log(invitedpeople.length);
console.log("I can only invite two guests!");
while (invitedpeople.length > 2) {
    let reoveguests = invitedpeople.pop();
    console.log(`Dear ${reoveguests}, I am Sorry I cant invite you at dinner`);
}
console.log(invitedpeople);
invitedpeople.map((name) => {
    `Dear ${name}, You're still invited to the dinner 
 Thank You!`;
});
invitedpeople.splice(0, 2);
console.log(invitedpeople);
//  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`${invitedpeople.length} people are invited to the Dinner!.`);
