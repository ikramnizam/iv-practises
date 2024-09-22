const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// nomber depan = nomber belakang
// Function to check if a number is a palindrome
function isPalindrome(num) {
    const strNum = num.toString(); // Convert the number to a string
    const reversedStr = strNum.split('').reverse().join(''); // Reverse the string
    return strNum === reversedStr; // Check if the original and reversed strings are equal
}

// Ask the user for a number
rl.question('Enter a number to check if it is a palindrome: ', (input) => {
    const num = parseInt(input); // Convert input to an integer

    if (!isNaN(num)) {
        if (isPalindrome(num)) {
            console.log(`${num} is a palindrome.`);
        } else {
            console.log(`${num} is not a palindrome.`);
        }
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close();
});
