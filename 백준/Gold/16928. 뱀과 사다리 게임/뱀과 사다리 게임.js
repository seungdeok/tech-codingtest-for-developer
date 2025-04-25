/**
 * https://www.acmicpc.net/problem/16928
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const ladders = new Map();
const snakes = new Map();

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  ladders.set(start, end);
}
for (let i = N + 1; i <= N + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  snakes.set(start, end);
}

const visited = new Array(101).fill(false);
const queue = [[1, 0]];
visited[1] = true;

while (queue.length) {
  const [position, moves] = queue.shift();

  if (position === 100) {
    console.log(moves);
    break;
  }

  for (let i = 1; i <= 6; i++) {
    let nextPosition = position + i;

    if (nextPosition > 100) continue;

    if (ladders.has(nextPosition)) {
      nextPosition = ladders.get(nextPosition);
    } else if (snakes.has(nextPosition)) {
      nextPosition = snakes.get(nextPosition);
    }

    if (!visited[nextPosition]) {
      visited[nextPosition] = true;
      queue.push([nextPosition, moves + 1]);
    }
  }
}