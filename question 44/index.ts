// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items:string[]){console.log(`\n Making a sandwhich with components`)
items.forEach(item=>{console.log(`\n- ${item}`)})
    }
sandwich("cheese","Jalapeno","Garlic sauce")
sandwich("egg","Ketchup","Mayo","Chicken")
sandwich("mango pickle","Ommelete","Green sauce","Bar B Que sauce","Green Chilli")
