/**
 * https://www.acmicpc.net/problem/14940
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const queue = [];

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (graph[row][col] === 2) {
      queue.push([row, col, 0]);
      visited[row][col] = true;
      break;
    }
  }
}

while (queue.length) {
  const [row, col, move] = queue.shift();

  graph[row][col] = move;

  for (const [r, c] of direction) {
    const nr = row + r;
    const nc = col + c;

    if (
      nr >= 0 &&
      nr < n &&
      nc >= 0 &&
      nc < m &&
      !visited[nr][nc] &&
      graph[nr][nc] !== 0
    ) {
      visited[nr][nc] = true;
      graph[nr][nc] = move + 1;
      queue.push([nr, nc, move + 1]);
    }
  }
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (graph[row][col] === 1 && !visited[row][col]) {
      graph[row][col] = -1;
    }
  }
}

console.log(graph.map((row) => row.join(" ")).join("\n"));