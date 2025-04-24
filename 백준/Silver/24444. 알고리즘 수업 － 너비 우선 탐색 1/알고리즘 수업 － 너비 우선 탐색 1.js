const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function BFS(V, E, R) {
  const visitedBFS = Array(V + 1).fill(false);
  const bfsPaths = Array(V + 1).fill(0);
  let count = 1;
  const queue = [R];
  visitedBFS[R] = true;
  bfsPaths[R] = count++;

  while (queue.length) {
    const start = queue.shift();

    for (const next of E[start]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        bfsPaths[next] = count++;
        queue.push(next);
      }
    }
  }

  return bfsPaths.slice(1).join("\n");
}

function main() {
  console.log(BFS(N, graph, R));
}

main();