const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to print multiplication table from 1 to N
function printMultiplicationTable(N) {
    for (let i = 1; i <= N; i++) {
        let row = '';
        for (let j = 1; j <= N; j++) {
            row += (i * j).toString().padStart(4, ' '); // Calculate and format each product
        }
        console.log(row); // Print the row of the multiplication table
    }
}

// Ask the user for the value of N
rl.question('Enter a number N to print the multiplication table up to N: ', (input) => {
    const N = parseInt(input); // Convert input to an integer

    if (!isNaN(N) && N > 0) {
        printMultiplicationTable(N); // Call the function to print the table
    } else {
        console.log('Please enter a valid positive number for N.');
    }

    rl.close();
});
