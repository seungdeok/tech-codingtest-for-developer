// Q1: Array.sort() ?

// 1. Define input line using fs module.
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 2. Define member count.
const count = Number(input[0]);

// 3. Define member list and Sort asc
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);

// 4. Caclulate sum of each person's time
let sum = 0;
let summary = 0;
for (let i = 0; i < count; i++) {
    summary += arr[i];
    sum += summary;
}

console.log(sum);