const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let visitedArr = new Array(n).fill(false);
const output = [];
let result = '';

function dfs(depth) {
    if (depth === m) {
        result += output.join(" ") + "\n";
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!visitedArr[i]) {
            visitedArr[i] = true;
            output.push(i + 1);
            dfs(depth + 1);
            visitedArr[i] = false;
            output.pop();
        }
    }
}

function solution() {
    dfs(0);
    console.log(result.trim());
}

solution();
