// 2초 / 128MB
// 23.06.13

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, v] = input[0].split(" ").map(Number);

const list = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const [src, dest] = input[i].split(" ").map(Number);

  list[src].push(dest);
  list[dest].push(src);
}

for (const edge of list) {
  edge.sort((a, b) => a - b);
}

let visitedDFS = Array().fill(false);
let dfsPaths = [];

function dfs(start) {
  visitedDFS[start] = true;
  dfsPaths.push(start);

  for (const next of list[start]) {
    if (next && !visitedDFS[next]) {
      dfs(next);
    }
  }
}

let visitedBFS = Array().fill(false);
let bfsPaths = [];

function bfs(start) {
  const queue = [start];
  bfsPaths.push(start);

  while (queue.length) {
    const cur = queue.shift();
    visitedBFS[cur] = true;

    for (const next of list[cur]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
        bfsPaths.push(next);
      }
    }
  }
}

dfs(v);
console.log(dfsPaths.join(" "));

bfs(v);
console.log(bfsPaths.join(" "));
