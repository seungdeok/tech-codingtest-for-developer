/**
 * https://www.acmicpc.net/problem/2805
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...heights);

let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let total = 0;
  for (const height of heights) {
    total += Math.max(height - mid, 0);
  }

  if (total >= M) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);