// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ["John", "Charley", "Youmbra", "Kaliya", "Junaid Bangali", "Rustam Bengali"];
// function show_magicians(array:string[]){
//     for(let i=0;i<=4;i++){console.log(array[i])}
// }
// console.log(magician)
// show_magicians(magician)
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let city_country: (city: String, country: string) => string=(city:String,country:string)=>(`"${city}, ${country}"`)
// let city_countryreturns=city_country("Karachi", "Pakistan")
// console.log( city_countryreturns)
// city_countryreturns=city_country("Mumbai", "India")
// console.log( city_countryreturns) 
// city_countryreturns=city_country("Chittagong", "Bangladesh")
// console.log( city_countryreturns)
// let temvalue:string
// function make_great(magician:string[]){
//   magician=  magician.map((magicia)=>{return`${magicia} the great`})
//   return magician}
// console.log(magician)
// let wah =make_great(magician)
// magician=wah
//   show_magicians(magician)
//Q:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function make_album(artistname, albumtitle, tracks) {
    var album = { name: artistname, Albumtitle: albumtitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Anas Maududi", "The world is love!!");
var album2 = make_album("Baba", "Baby so toddler");
var album3 = make_album("Mama", "Relatives Matter");
var album4 = make_album("Mama", "Relatives Matter", 34);
console.log(album1);
console.log(album2);
var copyarray = [magician];
function make_great(array) {
    console.log("copy array= ".concat(array));
}
// make_great(magician)
// console.log(magician)
// console.log(copyarray)
function show_magician(copyarrray, magiciian) {
    if (copyarrray === copyarray) {
        console.log(copyarray);
    }
    else if (copyarrray == magician) {
        magician = magician.map(function (magicia) { return "".concat(magicia, "The Great"); });
        console.log(magician);
    }
}
// }}
// // if(magician){
// //   if (magician===magician){magician=magician.map(magicia=>`${magicia}The Great`)
// //   console.log(magician)}
// // }
// // else if (magician==copyarray){console.log(copyarray)}
// //  show_magician()
show_magician(copyarray);
show_magician(magician);
