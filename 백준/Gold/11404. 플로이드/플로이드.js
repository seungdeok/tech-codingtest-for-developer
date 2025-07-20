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

const graph = Array.from({ length: N }, () =>
  Array(N).fill(Number.MAX_SAFE_INTEGER)
);
for (let i = 2; i < M + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  if (graph[start - 1][end - 1] > cost) {
    graph[start - 1][end - 1] = cost;
  }
}
for (let i = 0; i < N; i++) {
  graph[i][i] = 0;
}

for (let k = 0; k < N; k++) {
  //경유지
  for (let i = 0; i < N; i++) {
    //출발 정점
    for (let j = 0; j < N; j++) {
      //도착 정점
      if (
        graph[i][k] === Number.MAX_SAFE_INTEGER ||
        graph[k][j] === Number.MAX_SAFE_INTEGER
      ) {
        continue;
      }
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < N; j++) {
    row.push(graph[i][j] === Number.MAX_SAFE_INTEGER ? 0 : graph[i][j]);
  }
  console.log(row.join(" "));
}