const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 2; i <= M + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function BFS(V, E, R) {
  const visitedBFS = Array(V + 1).fill(false);
  const queue = [R];

  visitedBFS[R] = true;

  while (queue.length) {
    const start = queue.shift();

    for (const next of E[start]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
      }
    }
  }

  return visitedBFS.filter((v) => v).length;
}

function main() {
  const virus = BFS(N, graph, 1);

  console.log(virus - 1);
}

main();