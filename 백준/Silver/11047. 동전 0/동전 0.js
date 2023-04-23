// Q1. Array.join()

// 1. Define input value using fs module
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Define n, k 
const [n, k] = input[0].split(" ").map(Number);

// 3. Repeat n, Calculate quotient and reminder
let sum = 0;
let reminder = k;

for (let i = n; i >= 1; i--) {
    if (reminder !== 0) {
        const quitient = parseInt(reminder / Number(input[i]));
        sum += quitient;
        reminder -= Number(input[i]) * quitient;
    } else {
        break;
    }
}

// 4. Print sum of min quotients
console.log(sum);