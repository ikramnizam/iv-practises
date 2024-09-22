const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers.';
    if (n === 0 || n === 1) return 1; // Base case: 0! = 1! = 1
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i; // Multiply fact by each number up to n
    }
    return fact;
}

// Ask the user for a number
rl.question('Enter a number to find its factorial: ', (input) => {
    const num = parseInt(input); // Convert input to an integer

    if (!isNaN(num)) {
        const result = factorial(num);
        console.log(`The factorial of ${num} is: ${result}`);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
