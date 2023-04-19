const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

function compare(a, b) {
    return a - b;
}

let answer = '';
arr.sort(compare).forEach((num) => {
    answer += `${num}\n`;
});
console.log(answer);