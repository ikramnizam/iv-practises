const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the number of digits in a negative number
function countDigitsInNegativeNumber(num) {
    const absoluteValue = Math.abs(num); // Get the absolute value
    return absoluteValue.toString().length; // Convert to string and count digits
}

// Ask the user for a negative number
rl.question('Enter a negative number: ', (input) => {
    const number = parseInt(input); // Convert input to an integer

    if (!isNaN(number) && number < 0) {
        const digitCount = countDigitsInNegativeNumber(number); // Count digits
        console.log(`The number of digits in ${number} is: ${digitCount}`);
    } else {
        console.log('Please enter a valid negative number.');
    }

    rl.close();
});
