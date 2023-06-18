// 1초 192MB
// 23.06.18
// 22:16 ~ 23:17

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const list = [];
const visited = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 1; i <= N; i++) {
  const line = input[i].split("").map(Number);
  list.push(line);
}

function bfs(row, col) {
  const queue = [[row, col]];
  visited[row][col] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (list[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
bfs(0, 0);
console.log(visited[N - 1][M - 1]);
