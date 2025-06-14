/**
 * https://www.acmicpc.net/problem/15663
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(N).fill(false);
const answer = new Set();

function backtrack(path) {
  if (path.length === M) {
    answer.add(path.join(" "));
    return;
  }

  let prev = null;
  for (let i = 0; i < N; i++) {
    if (!visited[i] && arr[i] !== prev) {
      visited[i] = true;
      path.push(arr[i]);
      backtrack(path);
      visited[i] = false;
      path.pop();
      prev = arr[i];
    }
  }
}

backtrack([]);

console.log([...answer].join("\n"));