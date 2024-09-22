const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to sum all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0); // Sum elements using reduce
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas: ', (input) => {
    // Split the input string into an array and convert each element to a number
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Validate the input to check if it's an array of numbers
    if (numbers.every(num => !isNaN(num))) {
        const sum = sumArray(numbers);
        console.log(`The sum of the array elements is: ${sum}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
