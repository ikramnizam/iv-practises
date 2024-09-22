const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//function to reverse string
function reverseString(str){
   return str.split('').reverse().join('');
}

// Ask for user input
console.log("Enter a string (press Ctrl+C to exit):");

rl.on('line', (input) => {
    console.log("Reversed: " + reverseString(input));
    console.log("Enter another string (or press Ctrl+C to exit):");
});