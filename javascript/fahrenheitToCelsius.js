const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Conversion formula
}

// Ask the user for a temperature in Fahrenheit
rl.question('Enter temperature in Fahrenheit: ', (input) => {
    const fahrenheit = parseFloat(input); // Convert input to a floating-point number

    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
