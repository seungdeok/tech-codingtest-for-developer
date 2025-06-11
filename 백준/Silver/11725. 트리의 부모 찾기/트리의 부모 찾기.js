/**
 * https://www.acmicpc.net/problem/11725
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const graph = Array.from({ length: N + 1 }, () => []);

for (const item of input.slice(1)) {
  const [start, end] = item.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

const answer = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

function bfs() {
  const queue = [1];
  visited[1] = true;

  while (queue.length) {
    const cur = queue.shift();

    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }
}

bfs();

for (let i = 2; i <= N; i++) {
  console.log(answer[i]);
}