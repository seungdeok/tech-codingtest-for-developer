const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [src, dest] = input[i].split(" ").map(Number);
  graph[src].push(dest);
  graph[dest].push(src);
}

const visited = Array.from({ length: N + 1 }, () => false);
let cnt = 0;

function bfs(v) {
  const queue = [v];

  while (queue.length) {
    const cur = queue.shift();

    for (const next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    cnt++;
  }
}

console.log(cnt);
