/**
 * https://www.acmicpc.net/problem/15649
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const visited = Array(N + 1).fill(false);

const answer = [];

function backtracking(arr, visited) {
  if (arr.length === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(i);
      backtracking(arr, visited);
      arr.pop();
      visited[i] = false;
    }
  }
}

backtracking([], visited);
console.log(answer.join("\n"));