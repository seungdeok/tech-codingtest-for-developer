const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i < 2 + m; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
}

let answer = 0;
const visited = new Array(n + 1).fill(false);

function dfs(g, v, i) {
  v[i] = true;
  answer++;
  for (let node of graph[i]) {
    if (!v[node]) dfs(g, v, node);
  }
}

dfs(graph, visited, 1);

console.log(answer - 1);