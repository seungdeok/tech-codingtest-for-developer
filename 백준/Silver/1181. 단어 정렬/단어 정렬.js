const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
}

function compare(a, b) {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
}

let answer = '';
[...new Set(arr)].sort(compare).forEach((str) => {
    answer += `${str}\n`;
});

console.log(answer);