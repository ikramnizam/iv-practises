const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the largest number in an array
function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first number is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current number is greater
        }
    }
    return largest;
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas: ', (input) => {
    // Split the input string into an array and convert each element to a number
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Validate the input to check if it's an array of numbers
    if (numbers.every(num => !isNaN(num))) {
        const largestNumber = findLargestNumber(numbers);
        console.log(`The largest number is: ${largestNumber}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
