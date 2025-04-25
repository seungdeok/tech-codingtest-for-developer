/**
 * https://www.acmicpc.net/problem/3273
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
const X = Number(input[2]);

let left = 0;
let right = N - 1;
let answer = 0;

arr.sort((a, b) => a - b);

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === X) {
    answer++;
    left++;
    right--;
  } else if (sum < X) {
    left++;
  } else {
    right--;
  }
}

console.log(answer);