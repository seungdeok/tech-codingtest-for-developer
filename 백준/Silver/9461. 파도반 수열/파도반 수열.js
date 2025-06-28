/**
 * https://www.acmicpc.net/problem/9461
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

const dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
for (let i = 4; i <= 101; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

for (const str of input.slice(1)) {
  const num = +str;
  console.log(dp[num]);
}