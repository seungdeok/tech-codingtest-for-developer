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

const T = +input[0];

for (let i = 0, j = 1; i < T; i++) {
  const [M, N, K] = input[j].split(" ").map(Number);

  const arr = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => 0)
  );

  for (let l = j + 1; l <= j + K; l++) {
    const [row, col] = input[l].split(" ").map(Number);
    arr[row][col] = 1;
  }

  function dfs(r, c) {
    arr[r][c] = -1;

    for (const [dr, dc] of [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ]) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < M && nc >= 0 && nc < N && arr[nr][nc] === 1) {
        arr[nr][nc] = -1;
        dfs(nr, nc);
      }
    }
  }

  let answer = 0;

  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (arr[x][y] === 1) {
        dfs(x, y);
        answer++;
      }
    }
  }

  console.log(answer);
  j += K + 1;
}