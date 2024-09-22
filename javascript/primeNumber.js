const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // If no divisors found, it's prime
}

// Ask the user for a number
rl.question('Enter a number to check if it is prime: ', (input) => {
    const number = parseInt(input); // Convert input to an integer

    if (!isNaN(number)) {
        const result = isPrime(number); // Check if the number is prime
        if (result) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is not a prime number.`);
        }
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
