const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n , m] = input[0].split(" ").map(Number);

let visited = new Array(n).fill(false);
let answer = '';
const output = [];

function dfs(depth, start) {
    if (depth === m) {
        answer += `${output.join(" ")}\n`;
        
        return;
    }

    for (let i = start; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            output.push(i + 1);
            dfs(depth + 1, i + 1);
            output.pop();
            visited[i] = false;
        }
    }
}

dfs(0, 0);
console.log(answer.trim());