const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]) / 4;

let answer = '';
for (let i = 0; i < n; i++) {
    answer += 'long ';
}

console.log(`${answer}int`);