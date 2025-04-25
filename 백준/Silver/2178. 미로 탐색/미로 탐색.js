/**
 * https://www.acmicpc.net/problem/2178
 */
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [targetY, targetX] = [N - 1, M - 1];
const map = input.slice(1).map((line) => line.split("").map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function BFS() {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [curY, curX, answer] = queue.shift();

    if (curY === targetY && curX === targetX) {
      return answer;
    }
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [curY + dy[i], curX + dx[i]];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx]) {
        map[ny][nx] = 0;
        queue.push([ny, nx, answer + 1]);
      }
    }
  }

  return -1;
}

console.log(BFS());