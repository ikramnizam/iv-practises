const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the average of the elements in the array
function calculateAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0); // Sum all elements in the array
    return sum / arr.length; // Divide the sum by the number of elements
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(num => parseFloat(num.trim())); // Convert input to an array of numbers

    // Check if all the inputs are valid numbers
    if (numbers.every(num => !isNaN(num))) {
        const average = calculateAverage(numbers); // Call the function to calculate the average
        console.log(`The average of the numbers is: ${average}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
