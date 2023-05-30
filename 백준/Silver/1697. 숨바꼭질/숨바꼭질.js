// 2초 / 128MB
// 23.05.30
// 16:00 ~ 16:21

function bfs(start, dest, iVisited) {
  const queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    let cur = queue.shift();
    if (cur === dest) {
      console.log(iVisited[cur]);
      return;
    }

    for (let idx of [cur - 1, cur + 1, cur * 2]) {
      if (iVisited[idx] === 0) {
        iVisited[idx] = iVisited[cur] + 1;
        queue.push(idx);
      }
    }
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [s, d] = input[0].split(" ").map(Number);
let visited = Array(100001).fill(0);

bfs(s, d, visited);