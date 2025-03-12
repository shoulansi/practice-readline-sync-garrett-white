const readline = require('readline-sync');
let name = readline.question("What is your name? ");
console.log("Hello, " + name + "!");

let question1 = readline.question("1. What is an example of explicit conversion?");
let question2 = readline.question("2. Give me a complex data type.")
let question3 = readline.questionInt("3. How many simple data types are there?")
let question4 = readline.question("4. Give me an example variable in camelCase format.")
let finalQuestion = readline.question("5. Besides let, What is one of the two other ways to declare a variable?")

console.log("1. " + question1, "2. " + question2, "3. " + question3, "4. " + question4, "5. " + finalQuestion)
console.log("Answers - 1. Number(), Boolean(), String() 2. Array, Object 3. 7 4. lowercaseUppercase 5. const, var")