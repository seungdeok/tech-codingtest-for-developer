const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <=n; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}