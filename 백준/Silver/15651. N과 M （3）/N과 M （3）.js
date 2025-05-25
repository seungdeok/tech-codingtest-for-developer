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

function backtrack(depth, arr) {
  if (depth === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    arr.push(i);
    backtrack(depth + 1, arr);
    arr.pop();
  }
}

backtrack(0, []);

console.log(answer.join("\n"));
