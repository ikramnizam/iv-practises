const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//  nombor yang boleh ditulis sebagai kuasa dua dari integer (contoh: 1, 4, 9, 16)
// Function to check if a number is a perfect square
function isPerfectSquare(num) {
    if (num < 0) return false; // Negative numbers cannot be perfect squares
    const sqrt = Math.sqrt(num); // Calculate the square root of the number
    return sqrt * sqrt === num; // Check if the square of the square root equals the original number
}

// Ask the user for a number
rl.question('Enter a number to check if it is a perfect square: ', (input) => {
    const num = parseInt(input); // Convert input to an integer

    if (!isNaN(num)) {
        if (isPerfectSquare(num)) {
            console.log(`${num} is a perfect square.`);
        } else {
            console.log(`${num} is not a perfect square.`);
        }
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
