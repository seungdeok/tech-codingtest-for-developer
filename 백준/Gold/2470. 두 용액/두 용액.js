/**
 * https://www.acmicpc.net/problem/2470
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let left = 0;
let right = N - 1;

let minDiff = Infinity;
let answer = [];

while (left < right) {
  const sum = arr[left] + arr[right];
  const diff = Math.abs(sum);

  if (diff < minDiff) {
    minDiff = diff;
    answer = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer.join(" "));
