// 1초 / 128MB
// 23.06.01
// 15:47 ~ 15:55

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const link = +input[1];

const graph = Array.from(Array(n + 1), () => []);
for (let i = 2; i <= link + 1; i++) {
  const [src, dest] = input[i].split(" ").map(Number);
  graph[src].push(dest);
  graph[dest].push(src);
}

let visited = Array(n + 1).fill(false);

let cnt = 0;

function dfs(start) {
  visited[start] = true;
  cnt++;

  for (let v of graph[start]) {
    if (!visited[v]) {
      dfs(v);
    }
  }
}

dfs(1);
console.log(cnt - 1);