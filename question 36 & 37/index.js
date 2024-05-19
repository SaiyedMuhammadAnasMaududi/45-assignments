// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//  let make_shirt=(size:string,printedontheshirt:string)=>console.log(`You will be informed timely when your Shirt with size: ${size} and the print " ${printedontheshirt}" at the front of your shirt will be ready . Regards`)
//  make_shirt(Small,"Future Billionaire InshaAllah")
//  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var defaultsize = "large";
var defaultsize2 = "Medium";
var make_shirt = function (Size, message) {
    var defaultsize = "large";
    var defaultsize2 = "Medium";
    console.log("The size of the shirt going to be made will be of size ".concat(defaultsize, "\nBy Default Size of Shirt=\"Large\"\nMessage on the front of the shirt :\"I love Typescript\""));
    console.log("The size of the shirt going to be made will be of size ".concat(defaultsize2, "\nBy Default Size of Shirt=\"Large\"\nDefault Message on the front of the shirt :\"I love Typescript\""));
    console.log("User's Shirt Criteria:");
    console.log("The size of the shirt going to be made will be of size ".concat(Size, " wit hthe message on the front ").concat(message));
};
make_shirt("small", "Hello world");
