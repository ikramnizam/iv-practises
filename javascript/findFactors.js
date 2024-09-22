const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//  
// Function to find factors of a number
function findFactors(number) {
    let factors = []; //an empty array called factors is initialized to store the factors of the given number
    for (let i = 1; i <= number; i++) { 
        if (number % i === 0) {  //checks if number is divisible by i
            factors.push(i);  //If it is divisible, i is added to the factors array using factors.push(i).
        } 
    }
    return factors;
}

// Ask the user for a number
rl.question('Enter a number to find its factors: ', (input) => {
    const num = parseInt(input);

    if (!isNaN(num) && num > 0) {
        const factors = findFactors(num);
        console.log(`Factors of ${num} are: ${factors.join(', ')}`);
    } else {
        console.log('Please enter a valid positive number.');
    }

    rl.close();
});
