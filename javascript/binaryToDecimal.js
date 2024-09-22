const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert binary to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2); // Convert binary string to decimal
}

// Ask the user for a binary number
rl.question('Enter a binary number: ', (input) => {
    // Validate if the input is a valid binary number
    if (/^[01]+$/.test(input.trim())) {
        const decimal = binaryToDecimal(input.trim()); // Convert to decimal
        console.log(`The decimal representation of ${input} is: ${decimal}`);
    } else {
        console.log('Please enter a valid binary number (only 0s and 1s).');
    }

    rl.close();
});
