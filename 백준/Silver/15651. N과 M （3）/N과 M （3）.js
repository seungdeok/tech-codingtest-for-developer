const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let answer = '';
const output = [];
let visited = new Array(n).fill(false);

function dfs(depth, start) {
    if (depth === m) {
        answer += `${output.join(" ")}\n`;
        return;
    }
    for (let i = start; i < n; i++) {
        output.push(i + 1);
        dfs(depth + 1, 0);
        output.pop();
    }
}

dfs(0, 0);
console.log(answer.trim());