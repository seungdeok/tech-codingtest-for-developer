/**
 * 1260. DFS와 BFS
 * https://www.acmicpc.net/problem/1260
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => Array());

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visitedDFS = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(start) {
  visitedDFS[start] = true;
  dfsResult.push(start);

  for (let i = 0; i < graph[start].length; i++) {
    const next = graph[start][i];
    if (!visitedDFS[next]) {
      dfs(next);
    }
  }
}

dfs(V);
console.log(dfsResult.join(" "));

const visitedBFS = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(start) {
  const queue = [start];
  bfsResult.push(start);

  while (queue.length > 0) {
    const current = queue.shift();
    visitedBFS[current] = true;

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (!visitedBFS[next]) {
        queue.push(next);
        bfsResult.push(next);
        visitedBFS[next] = true;
      }
    }
  }
}

bfs(V);
console.log(bfsResult.join(" "));