const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert decimal to binary
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2); // Convert to binary using bitwise and to ensure non-negative
}

// Ask the user for a decimal number
rl.question('Enter a decimal number: ', (input) => {
    const decimal = parseInt(input); // Convert input to an integer

    if (!isNaN(decimal) && decimal >= 0) {
        const binary = decimalToBinary(decimal); // Convert to binary
        console.log(`The binary representation of ${decimal} is: ${binary}`);
    } else {
        console.log('Please enter a valid non-negative decimal number.');
    }

    rl.close();
});
