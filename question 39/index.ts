// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:String,country:string){
//     console.log(`"${city}, ${country}"`)
// }
// city_country("Karachi", "Pakistan")
// city_country("Mumbai", "India")
// city_country("Chittagong", "Bangladesh")



// OR
//  It could alse be done like this:

let city_country: (city: String, country: string) => string=(city:String,country:string)=>(`"${city}, ${country}"`)
let city_countryreturns=city_country("Karachi", "Pakistan")
console.log( city_countryreturns)
city_countryreturns=city_country("Mumbai", "India")
console.log( city_countryreturns) 
city_countryreturns=city_country("Chittagong", "Bangladesh")
console.log( city_countryreturns)


