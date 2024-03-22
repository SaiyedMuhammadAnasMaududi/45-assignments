// Question:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Pname:string ="Saiyed Muhammad Anas Maududi"
console.log(Pname.toLowerCase());
console.log(Pname.toUpperCase());


let TitelCaseName : string[] = [];
let Lowercase:string = Pname.toLowerCase();
let UpperCase:string = Pname.toUpperCase();
let word = Lowercase.split(' ');

        for(let i=0; i<word.length; i++){
            TitelCaseName[i]= word[i].charAt(0).toUpperCase()+word[i].slice(1);
        }

console.log(TitelCaseName)