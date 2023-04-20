const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let answer = '';
for (let i = 1; i <= n; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    answer += `${num1 + num2}\n`;
}

console.log(answer);