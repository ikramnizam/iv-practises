const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Greatest Common Divisor
// GCD is the largest number that can divide both numbers without a balance. Euclid's algorithm can be used to find GCD
// Function to calculate GCD using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; // Update b to the remainder of a divided by b
        a = temp; // Update a to the previous value of b
    }
    return a; // Return the GCD
}

// Ask the user for two two-digit numbers
rl.question('Enter two two-digit numbers separated by a space: ', (input) => {
    const numbers = input.split(' ').map(num => parseInt(num.trim())); // Split input and convert to integers

    // Validate the input
    if (numbers.length === 2 && numbers.every(num => num >= 10 && num <= 99 && !isNaN(num))) {
        const [num1, num2] = numbers;
        const result = gcd(num1, num2);
        console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
    } else {
        console.log('Please enter two valid two-digit numbers.');
    }

    rl.close();
});
