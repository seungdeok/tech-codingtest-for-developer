// 2초 / 128MB
// 23.05.31
// 22:47 ~ 23:30

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

const graph = [[]];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  graph.push([0, ...line]);
}

// 방문 여부
const visited = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
visited[1][1] = true;

// BFS
function bfs() {
  const queue = [[1, 1]];

  while (queue.length > 0) {
    const cur = queue.shift();
    const [x, y] = cur;
    const count = graph[x][y];
    if (x === n && y === n) {
      return true;
    }

    for (const next of ["right", "bottom"]) {
      if (next === "right") {
        const nx = x + count;
        const ny = y;
        if (nx <= n && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      } else if (next === "bottom") {
        const nx = x;
        const ny = y + count;
        if (ny <= n && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return false;
}

if (bfs()) {
  console.log("HaruHaru");
} else {
  console.log("Hing");
}