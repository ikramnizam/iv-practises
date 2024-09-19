// Input nilai n 
// to create output interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to generate Fibonacci sequence up to the nth number
function fibonacci(n) {
    let sequence = [];    //variable sequence is declared as an empty array
    let a = 0, b = 1, nexttemp;  //declare a=0 and b=1 pastu nexttemp tu declared but not initialized.will be used to temporarily hold the value of a while updating a and b

    for (let i = 0; i < n; i++) {   //for loop is used to iterate n times
        sequence.push(a);       //The current Fibonacci number (a) is added to the sequence array. The push() method adds elements to the end of the array
        nexttemp = a;  //the value of a is stored in nexttemp
        a = b;    //a is updated to the value of b
        b = nexttemp + b;  //b is updated to the sum of temp and b, which is the next Fibonacci number in the sequence.
    }

    return sequence;
}



readline.question('Masukkan nilai n: ', n => {
    console.log(`Urutan Fibonacci hingga bilangan ke-${n}: ${fibonacci(parseInt(n)).join(', ')}`);
    readline.close();
});
