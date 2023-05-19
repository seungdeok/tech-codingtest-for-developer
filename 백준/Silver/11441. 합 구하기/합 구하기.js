const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

const n = +input[0];
const m = +input[2];

const arr = input[1].split(" ").map(Number);

let sum = 0;
const answer = [0];

for (let num of arr) {
    sum += num;
    answer.push(sum);
}

let output = '';
for (let i = 3; i <= m + 2; i++) {
    const [s, e] = input[i].split(" ").map(Number);
    output += `${answer[e] - answer[s - 1]}\n`;
}
console.log(output);