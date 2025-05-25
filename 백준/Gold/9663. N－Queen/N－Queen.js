/**
 * https://www.acmicpc.net/problem/9663
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

let answer = 0;
const queens = [];
function isValid(row, col) {
  for (let [a, b] of queens) {
    if (a == row || b == col) return false;
    if (Math.abs(a - row) == Math.abs(b - col)) return false;
  }
  return true;
}

function backtracking(row) {
  if (row === N) {
    answer++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (isValid(row, col)) {
      queens.push([row, col]);
      backtracking(row + 1);
      queens.pop();
    }
  }
}

backtracking(0);

console.log(answer);