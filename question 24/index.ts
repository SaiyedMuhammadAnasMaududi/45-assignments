// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let size =24
let animal ="Zebra"
let animal2="Zebra"
console.log(` Tests for equality and inequality with strings :`)

            console.log(animal==="Lion")
            console.log(animal==="Zebra")
            console.log(animal!=="Zebra")
            console.log(animal!=="Giraffe")
            


console.log(`Tests using the lower case function:`)

            console.log(animal.toLowerCase()==="zebra")
            console.log(animal2.toLowerCase()===animal)

console.log(`• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to :`)
            console.log(size===24)

            console.log(size===23)

            console.log(size!==25)

            console.log(size!==2*12)

            console.log(size>=20)

            console.log(size>=30)

            console.log(size<=25)

            console.log(size<=23)

            console.log(size > 21)

            console.log(size > 24)

            console.log(size < 15)
            
            console.log(size < 105)


            //  • Tests using "and" and "or" operators


console.log(` • Tests using "and" and "or" operators :`)
let animal3="elephant"
            console.log(size<30 && size>20)
            console.log(animal=="a" || animal==animal2)
            console.log(animal=="a"|| animal3===animal)

console.log(`Test whether an item is in a array :`)

    let array=["Fox",animal,animal2,animal3,"Bull"]
    array.map((item)=>
                    {
                        if(item==animal3){console.log(true)}
                       
                    })
                    // OR it could also be dine by another method i.e:
    
 console.log(`OR it could also be dine by another method i.e: `)

    array.includes("Fox")
                   

console.log(`Test whether an item is not in a array :`)

        //  One method throug which it would check each indexof the array and will return whether at that index that value is present or not:

console.log(` One method throug which it would check each indexof the array and will return whether at that index that value is present or not:`)

    array.map((item)=>
    {
        if(item.valueOf()!=="fox"){console.log(false)}
       
    })

    // Another method for it was that the whole array would be check simultaneously:

    console.log(`Another method for it was that the whole array would be check simultaneously:`)
                
                array.includes("fox")