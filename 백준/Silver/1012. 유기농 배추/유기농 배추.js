// 1초 / 512MB
// 23.06.01
// 16:09 ~ 16:54

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const testCases = +input[0];

let line = 1;

function dfs(graph, n, m, start, end) {
  if (start < 0 || end < 0 || start >= n || end >= m) {
    return false;
  }

  if (graph[start][end] === 1) {
    graph[start][end] = 0;

    dfs(graph, n, m, start, end + 1);
    dfs(graph, n, m, start, end - 1);
    dfs(graph, n, m, start + 1, end);
    dfs(graph, n, m, start - 1, end);

    return true;
  }

  return false;
}

for (let i = 0; i < testCases; i++) {
  let [m, n, k] = input[line].split(" ").map(Number);

  let graph = Array.from(Array(n), () => Array(m).fill(0));
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let answer = 0;
  for (let idx = 0; idx < n; idx++) {
    for (let jdx = 0; jdx < m; jdx++) {
      if (dfs(graph, n, m, idx, jdx)) answer++;
    }
  }

  line += k + 1;
  console.log(answer);
}
