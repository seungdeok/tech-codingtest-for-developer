const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

let idx = 0;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[idx].split(" ").map(Number);

  const map = Array.from(Array(N), () => Array(M).fill(0));

  for (let j = idx + 1; j < idx + K + 1; j++) {
    const [x, y] = input[j].split(" ").map(Number);
    map[y][x] = 1;
  }

  const visited = Array.from(Array(N), () => Array(M).fill(false));

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let answer = 0;

  function DFS(x, y) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (map[nx][ny] === 1 && !visited[nx][ny]) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        DFS(i, j);
        answer++;
      }
    }
  }

  console.log(answer);

  idx += K + 1;
}
