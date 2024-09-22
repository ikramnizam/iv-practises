const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Ask the user for an array of numbers
rl.question('Enter numbers separated by commas: ', (input) => {
    // Split the input string into an array and convert each element to a number
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Ask the user for the target number
    rl.question('Enter the number to search for: ', (targetInput) => {
        const target = parseFloat(targetInput);

        // Validate the input to check if it's an array of numbers and a valid target number
        if (numbers.every(num => !isNaN(num)) && !isNaN(target)) {
            const index = linearSearch(numbers, target);
            if (index !== -1) {
                console.log(`The number ${target} was found at index ${index}.`);
            } else {
                console.log(`The number ${target} was not found in the array.`);
            }
        } else {
            console.log('Please enter valid numbers for the array and target.');
        }

        rl.close();
    });
});
