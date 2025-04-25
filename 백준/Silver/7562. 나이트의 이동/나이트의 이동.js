/**
 * https://www.acmicpc.net/problem/7562
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

for (let i = 1; i <= T; i++) {
  const L = Number(input[index]);
  const [startY, startX] = input[index + 1].split(" ").map(Number);
  const [targetY, targetX] = input[index + 2].split(" ").map(Number);

  function BFS() {
    const queue = [[startY, startX, 0]];
    const dy = [2, 1, -1, -2, -2, -1, 1, 2];
    const dx = [1, 2, 2, 1, -1, -2, -2, -1];
    const visited = Array.from({ length: L }, () => Array(L).fill(false));
    visited[startY][startX] = true;

    while (queue.length) {
      const [curY, curX, answer] = queue.shift();

      if (curY === targetY && curX === targetX) {
        return answer;
      }

      for (let i = 0; i < 8; i++) {
        const [ny, nx] = [curY + dy[i], curX + dx[i]];

        if (ny >= 0 && ny < L && nx >= 0 && nx < L && !visited[ny][nx]) {
          visited[ny][nx] = true;
          queue.push([ny, nx, answer + 1]);
        }
      }
    }
  }

  console.log(BFS());

  index += 3;
}
