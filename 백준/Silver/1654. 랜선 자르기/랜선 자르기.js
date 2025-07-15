/**
 * https://www.acmicpc.net/problem/1654
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lines = input.slice(1).map((line) => +line);

let start = 1;
let end = Math.max(...lines);

let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let total = 0;
  for (const line of lines) {
    total += Math.floor(line / mid);
  }

  if (total >= N) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);