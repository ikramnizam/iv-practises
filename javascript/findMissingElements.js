const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find missing elements
function findMissingElements(arr, N) {
    const fullSet = new Set(Array.from({ length: N }, (_, i) => i + 1)); // Create a set of numbers from 1 to N
    const arrSet = new Set(arr); // Create a set of elements from the input array

    const missing = [...fullSet].filter(x => !arrSet.has(x)); // Find elements in fullSet but not in arrSet
    return missing;
}

// Ask the user for the list of numbers
rl.question('Enter the numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(num => parseInt(num.trim())); // Convert the input to an array of numbers

    if (numbers.every(num => !isNaN(num))) {
        rl.question('Enter the value of N: ', (nInput) => {
            const N = parseInt(nInput); // Convert N to an integer

            if (!isNaN(N) && N > 0) {
                const missing = findMissingElements(numbers, N);
                if (missing.length > 0) {
                    console.log(`The missing numbers are: ${missing.join(', ')}`);
                } else {
                    console.log('No numbers are missing.');
                }
            } else {
                console.log('Please enter a valid positive number for N.');
            }

            rl.close();
        });
    } else {
        console.log('Please enter a valid list of numbers.');
        rl.close();
    }
});
