const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas to sort: ', (input) => {
    // Split the input string into an array and convert each element to a number
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Validate the input to check if it's an array of numbers
    if (numbers.every(num => !isNaN(num))) {
        const sortedArray = bubbleSort(numbers);
        console.log(`Sorted array: ${sortedArray.join(', ')}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
