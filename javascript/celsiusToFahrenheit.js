const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Conversion formula
}

// Ask the user for a temperature in Celsius
rl.question('Enter temperature in Celsius: ', (input) => {
    const celsius = parseFloat(input); // Convert input to a floating-point number

    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
