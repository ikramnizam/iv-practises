const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print the rectangle
function printRectangle(width, height, char) {
    for (let i = 0; i < height; i++) {
        console.log(char.repeat(width)); // Print the character "char" 'width' number of times in each row
    }
}

// Ask the user for the width of the rectangle
rl.question('Enter the width of the rectangle: ', (widthInput) => {
    const width = parseInt(widthInput);

    if (!isNaN(width) && width > 0) {
        // Ask the user for the height of the rectangle
        rl.question('Enter the height of the rectangle: ', (heightInput) => {
            const height = parseInt(heightInput);

            if (!isNaN(height) && height > 0) {
                // Ask the user for the character to print
                rl.question('Enter the character to print the rectangle with: ', (charInput) => {
                    if (charInput.length === 1) {
                        printRectangle(width, height, charInput); // Print the rectangle
                    } else {
                        console.log('Please enter a valid single character.');
                    }

                    rl.close();
                });
            } else {
                console.log('Please enter a valid number for height.');
                rl.close();
            }
        });
    } else {
        console.log('Please enter a valid number for width.');
        rl.close();
    }
});
