// 2초 128MB
// 23.6.30
// 09:23 ~

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let testCases = +input[0];

let idx = 1;

const dy = [2, 1, -1, -2, -2, -1, 1, 2];
const dx = [1, 2, 2, 1, -1, -2, -2, -1];

function bfs(max, cur, next, visited) {
  const queue = [[...cur, 0]];
  // let cnt = 0;

  while (queue.length) {
    const [curX, curY, cnt] = queue.shift();
    const [nextX, nextY] = next;
    visited[curY][curX] = true;

    if (curX === nextX && curY === nextY) {
      return cnt;
    }

    for (let i = 0; i < 8; i++) {
      const sy = dy[i] + curY;
      const sx = dx[i] + curX;

      if (sy >= 0 && sx >= 0 && sy < max && sx < max && !visited[sy][sx]) {
        visited[sy][sx] = true;
        queue.push([sx, sy, cnt + 1]);
      }
    }
  }

  return cnt;
}

while (testCases > 0) {
  const I = input[idx];
  const cur = input[idx + 1].split(" ").map(Number);
  const target = input[idx + 2].split(" ").map(Number);
  const visited = Array.from({ length: I }, () => Array(I).fill(false));
  console.log(bfs(I, cur, target, visited));

  idx += 3;
  testCases--;
}
