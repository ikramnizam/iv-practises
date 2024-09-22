const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the largest and smallest elements in the array
function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is bigger
        }
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if current element is smaller
        }
    }

    return { largest, smallest }; // Return both largest and smallest values
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(num => parseFloat(num.trim())); // Convert input to an array of numbers

    // Check if all the inputs are valid numbers
    if (numbers.every(num => !isNaN(num))) {
        const { largest, smallest } = findLargestAndSmallest(numbers); // Call the function to find largest and smallest
        console.log(`The largest number is: ${largest}`);
        console.log(`The smallest number is: ${smallest}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
