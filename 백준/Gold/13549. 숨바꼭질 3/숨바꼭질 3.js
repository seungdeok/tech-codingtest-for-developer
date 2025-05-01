const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

function bfs() {
  const queue = [[n, 0]];
  const visited = new Array(100001).fill(false);

  while (queue.length) {
    const [cur, time] = queue.shift();

    if (cur === k) {
      return time;
    }

    if (visited[cur]) continue;
    visited[cur] = true;

    if (cur * 2 <= 100000 && !visited[cur * 2]) {
      queue.unshift([cur * 2, time]);
    }

    if (cur - 1 >= 0 && !visited[cur - 1]) {
      queue.push([cur - 1, time + 1]);
    }

    if (cur + 1 <= 100000 && !visited[cur + 1]) {
      queue.push([cur + 1, time + 1]);
    }
  }
}

console.log(bfs());