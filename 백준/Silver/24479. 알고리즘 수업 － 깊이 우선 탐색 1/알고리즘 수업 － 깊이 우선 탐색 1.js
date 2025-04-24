const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const visitedDFS = Array(N + 1).fill(false);
const dfsPaths = Array(N + 1).fill(0);
let count = 1;
const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function dfs(start) {
  visitedDFS[start] = true;
  dfsPaths[start] = count++;

  for (const next of graph[start]) {
    if (next && !visitedDFS[next]) {
      dfs(next);
    }
  }
}

function main() {
  dfs(R);

  console.log(dfsPaths.slice(1).join("\n"));
}

main();