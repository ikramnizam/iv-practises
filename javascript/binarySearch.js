const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }
    return -1; // Return -1 if the target is not found
}

// Ask the user for a sorted array of numbers
rl.question('Enter sorted numbers separated by commas: ', (input) => {
    // Split the input string into an array and convert each element to a number
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Validate if the array is sorted in ascending order
    const isSorted = numbers.every((num, i, arr) => i === 0 || arr[i - 1] <= num);

    if (isSorted) {
        // Ask the user for the target number
        rl.question('Enter the number to search for: ', (targetInput) => {
            const target = parseFloat(targetInput);

            if (!isNaN(target)) {
                const index = binarySearch(numbers, target);
                if (index !== -1) {
                    console.log(`The number ${target} was found at index ${index}.`);
                } else {
                    console.log(`The number ${target} was not found in the array.`);
                }
            } else {
                console.log('Please enter a valid number.');
            }

            rl.close();
        });
    } else {
        console.log('Please enter a valid sorted array of numbers.');
        rl.close();
    }
});
