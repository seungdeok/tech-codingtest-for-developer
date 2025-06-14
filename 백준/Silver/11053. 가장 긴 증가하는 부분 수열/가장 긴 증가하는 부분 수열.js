/**
 * https://www.acmicpc.net/problem/11053
 */

const [N, ...input] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ").map(Number);

const dp = Array(N).fill(0);
dp[0] = 1;

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[i] > arr[j]) {
      max = Math.max(max, dp[j]);
    }
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));