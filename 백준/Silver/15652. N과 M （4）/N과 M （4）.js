const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n ,m] = input[0].split(" ").map(Number);

let answer = '';
const output = [];

function dfs(depth, start) {
    if (depth === m) {
        answer += `${output.join(" ")}\n`;
        return;
    }
    for (let i = start; i < n; i++) {
        output.push(i + 1);
        dfs(depth + 1, i);
        output.pop();
    }
}

dfs(0, 0);
console.log(answer.trim());