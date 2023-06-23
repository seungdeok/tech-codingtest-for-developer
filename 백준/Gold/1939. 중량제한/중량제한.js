const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);

const arr = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [s, e, w] = input[i].split(" ").map(Number);

  arr[s].push([e, w]);
  arr[e].push([s, w]);
}

const [start, end] = input[input.length - 1].split(" ").map(Number);

function bfs(target) {
  const queue = [start];
  const visited = Array(N + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();

    for (const [next, weight] of arr[cur]) {
      if (!visited[next] && weight >= target) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return visited[end];
}

function binarySearch() {
  let left = 1;
  let right = 1000000000;
  let answer = 0;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (bfs(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(binarySearch());
