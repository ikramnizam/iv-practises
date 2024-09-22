const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print the pyramid shape
function printPyramid(height, char) {
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i); // Calculate leading spaces
        const chars = char.repeat(2 * i - 1); // Calculate characters for the current row
        console.log(spaces + chars); // Print spaces and characters
    }
}

// Ask the user for the height of the pyramid
rl.question('Enter the height of the pyramid: ', (heightInput) => {
    const height = parseInt(heightInput); // Convert height to an integer

    if (!isNaN(height) && height > 0) {
        // Ask the user for the character to print
        rl.question('Enter the character to print the pyramid with: ', (charInput) => {
            if (charInput.length === 1) {
                printPyramid(height, charInput); // Print the pyramid
            } else {
                console.log('Please enter a valid single character.');
            }

            rl.close();
        });
    } else {
        console.log('Please enter a valid positive number for height.');
        rl.close();
    }
});
