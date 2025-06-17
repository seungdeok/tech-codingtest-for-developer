/**
 * https://www.acmicpc.net/problem/11404
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const M = +input[1];

const dist = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 2; i < M + 2; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  if (dist[from - 1][to - 1] === 0 || dist[from - 1][to - 1] > cost) {
    dist[from - 1][to - 1] = cost;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (!dist[i][j]) {
        dist[i][j] = Infinity;
      }
    }
  }
}

for (let k = 0; k < N; k++) {
  // 경유지
  for (let i = 0; i < N; i++) {
    // 출발 정점
    for (let j = 0; j < N; j++) {
      // 도착 정점
      if (dist[i][k] === Infinity || dist[k][j] === Infinity) {
        continue;
      }

      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < N; j++) {
    row.push(dist[i][j] === Infinity ? 0 : dist[i][j]);
  }
  console.log(row.join(" "));
}