const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((row) => row.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let count_total = 0;
let count_home = 0;
const answer = [];

function DFS(x, y) {
  visited[x][y] = true;
  count_home++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if (map[nx][ny] === 1 && !visited[nx][ny]) {
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      DFS(i, j);
      count_total++;
      answer.push(count_home);
      count_home = 0;
    }
  }
}

console.log(count_total);
console.log(answer.sort((a, b) => a - b).join("\n"));