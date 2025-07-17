/**
 * https://www.acmicpc.net/problem/1012
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [start, end, distance] = input[i].split(" ").map(Number);
  graph[start].push([end, distance]);
  graph[end].push([start, distance]);
}

const answer = [];

for (let i = N; i < N + M; i++) {
  const [s, e] = input[i].split(" ").map(Number);

  function dfs(start, distance, visited) {
    visited[start] = true;

    if (e === start) {
      answer.push(distance);
      return;
    }

    for (const [end, dis] of graph[start]) {
      if (!visited[end]) {
        dfs(end, distance + dis, visited);
      }
    }
  }

  const visited = Array(N + 1).fill(false);
  dfs(s, 0, visited);
}

console.log(answer.join("\n"));