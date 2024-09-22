const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the nth Fibonacci number
function fibonacci(n) {
    if (n <= 0) return 0; // Handle cases for n <= 0
    if (n === 1) return 1; // Base case: Fibonacci(1) = 1
    if (n === 2) return 1; // Base case: Fibonacci(2) = 1

    let a = 1, b = 1; // Start with Fibonacci(1) and Fibonacci(2)
    let fib = 1; // Initialize the nth Fibonacci number

    for (let i = 3; i <= n; i++) {
        fib = a + b; // Calculate the next Fibonacci number
        a = b; // Move forward in the sequence
        b = fib; // Update the previous Fibonacci number
    }
    return fib; // Return the nth Fibonacci number
}

// Ask the user for the value of n
rl.question('Enter the value of n to find the nth Fibonacci number: ', (input) => {
    const n = parseInt(input); // Convert input to an integer

    if (!isNaN(n) && n > 0) {
        const result = fibonacci(n);
        console.log(`The ${n}th Fibonacci number is: ${result}`);
    } else {
        console.log('Please enter a valid positive integer.');
    }

    rl.close();
});
