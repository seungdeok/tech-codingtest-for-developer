const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const visited = new Array(n).fill(false);
let output = [];
let result = '';

function dfs(depth) {
    if (depth === n) {
        result += `${output.join(" ")}\n`;
        return;
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            output.push(i + 1);
            dfs(depth + 1);
            output.pop();
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(result.trim());