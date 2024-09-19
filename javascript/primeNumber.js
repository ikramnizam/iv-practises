const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) {  //nombor kurang or sama dgn 1 bukan prime number
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question('Enter a number to check if it is prime: ', (input) => {
    const num = parseInt(input);
    if (isNaN(num)) {
        console.log('Please enter a valid number.');
    } else if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
    rl.close();
});
