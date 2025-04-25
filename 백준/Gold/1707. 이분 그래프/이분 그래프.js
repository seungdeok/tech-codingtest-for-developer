/**
 * https://www.acmicpc.net/problem/1707
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let index = 1;

for (let i = 0; i < T; i++) {
  const [V, E] = input[index].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const visited = Array(V + 1).fill(0);

  for (let j = 0; j < E; j++) {
    const [a, b] = input[index + 1 + j].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let isBipartite = true;

  function dfs(node, color) {
    visited[node] = color;

    for (const neighbor of graph[node]) {
      if (visited[neighbor] === color) {
        isBipartite = false;
        return;
      }
      if (visited[neighbor] === 0) {
        dfs(neighbor, -color);
      }
    }
  }

  for (let j = 1; j <= V; j++) {
    if (visited[j] === 0) {
      dfs(j, 1);
    }
    if (!isBipartite) break;
  }

  console.log(isBipartite ? "YES" : "NO");

  index += E + 1;
}