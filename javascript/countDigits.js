const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the number of digits in a number
function countDigits(num) {
    // Handle negative numbers by taking absolute value
    return Math.abs(num).toString().length;
}

// Ask the user for a number
rl.question('Enter a number: ', (input) => {
    const num = parseInt(input); // Convert input to an integer

    if (!isNaN(num)) {
        const digitCount = countDigits(num);
        console.log(`The number ${num} has ${digitCount} digit(s).`);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
