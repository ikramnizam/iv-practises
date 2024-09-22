const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform selection sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the first element is the minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
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
        const sortedArray = selectionSort(numbers);
        console.log(`Sorted array: ${sortedArray.join(', ')}`);
    } else {
        console.log('Please enter a valid list of numbers.');
    }

    rl.close();
});
