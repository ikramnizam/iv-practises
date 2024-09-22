const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert decimal to Roman numerals
function decimalToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol; // Append the Roman numeral symbol
            num -= value; // Decrease the number by its value
        }
    }

    return result; // Return the final Roman numeral string
}

// Ask the user for a decimal number
rl.question('Enter a decimal number: ', (input) => {
    const decimal = parseInt(input); // Convert input to an integer

    if (!isNaN(decimal) && decimal > 0) {
        const roman = decimalToRoman(decimal); // Convert to Roman numerals
        console.log(`The Roman numeral representation of ${decimal} is: ${roman}`);
    } else {
        console.log('Please enter a valid positive decimal number.');
    }

    rl.close();
});
