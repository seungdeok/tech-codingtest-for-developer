const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let answer = '';
    answer += (' ').repeat(n - i) + ('*').repeat(i);
    console.log(answer);
}