/**
 * https://www.acmicpc.net/problem/2579
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = [];

for (let i = 1; i <= N; i++) arr.push(+input[i]);

if (N === 1) {
  console.log(arr[0]);
  return;
}
if (N === 2) {
  console.log(arr[0] + arr[1]);
  return;
}

const dp = [arr[0], arr[0] + arr[1], Math.max(arr[0], arr[1]) + arr[2]];

for (let i = 3; i < arr.length; i++) {
  const a = dp[i - 3] + arr[i - 1] + arr[i];
  const b = dp[i - 2] + arr[i];
  dp[i] = Math.max(a, b);
}

console.log(dp.at(-1));