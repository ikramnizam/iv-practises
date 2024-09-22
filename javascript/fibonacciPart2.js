const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the Nth Fibonacci number
function fibonacci(n) {
    if (n <= 0) return 0; // Return 0 for non-positive input
    if (n === 1) return 1; // Return 1 for the first Fibonacci number

    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib = 0;

    for (let i = 2; i <= n; i++) {
        fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Update F(n-2)
        b = fib; // Update F(n-1)
    }

    return fib; // Return the Nth Fibonacci number
}

// Ask the user for the value of N
rl.question('Enter a positive integer N to find the Nth Fibonacci number: ', (input) => {
    const N = parseInt(input); // Convert input to an integer

    if (!isNaN(N) && N >= 0) {
        const nthFibonacci = fibonacci(N); // Calculate the Nth Fibonacci number
        console.log(`The ${N}th Fibonacci number is: ${nthFibonacci}`);
    } else {
        console.log('Please enter a valid positive integer.');
    }

    rl.close();
});
