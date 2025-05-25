/**
 * https://www.acmicpc.net/problem/15651
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const answer = [];

function backtracking(arr) {
  if (arr.length === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    backtracking(arr);
    arr.pop();
  }
}

backtracking([]);
console.log(answer.join("\n"));