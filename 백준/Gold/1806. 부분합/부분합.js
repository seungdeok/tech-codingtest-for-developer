/**
 * https://www.acmicpc.net/problem/1806
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let minLength = Infinity;

while (right < N) {
  sum += arr[right];

  while (sum >= S) {
    minLength = Math.min(minLength, right - left);
    sum -= arr[left];
    left++;
  }

  right++;
}

console.log(minLength === Infinity ? 0 : minLength + 1);