/**
 * https://www.acmicpc.net/problem/2512
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const M = +input[2];

let start = 1;
let end = Math.max(...arr);

let answer = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;
  for (const num of arr) {
    total += Math.min(mid, num);
  }

  if (total <= M) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);