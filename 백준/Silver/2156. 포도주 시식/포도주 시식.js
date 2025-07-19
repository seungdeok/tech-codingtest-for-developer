/**
 * https://www.acmicpc.net/problem/2156
 *
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
for (let i = 1; i <= N; i++) {
  arr.push(+input[i]);
}

const dp = Array(N).fill(0);
if (N > 0) dp[0] = arr[0];
if (N > 1) dp[1] = arr[0] + arr[1];
if (N > 2) dp[2] = Math.max(dp[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 1], // i번째 안 마신 경우
    arr[i] + dp[i - 2], // i -1 번째 안 마신 경우
    arr[i] + arr[i - 1] + dp[i - 3] // i - 2번째 안 마신 경우
  );
}

console.log(dp[N - 1]);