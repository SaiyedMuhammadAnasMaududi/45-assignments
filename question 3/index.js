// Question:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Pname = "Saiyed Muhammad Anas Maududi";
console.log(Pname.toLowerCase());
console.log(Pname.toUpperCase());
var TitelCaseName = [];
var Lowercase = Pname.toLowerCase();
var UpperCase = Pname.toUpperCase();
var word = Lowercase.split(' ');
for (var i = 0; i < word.length; i++) {
    TitelCaseName[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
}
console.log(TitelCaseName);
