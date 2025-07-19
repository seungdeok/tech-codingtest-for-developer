/**
 * https://www.acmicpc.net/problem/1003
 *
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = +input[0];

const dp = Array(41).fill(0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= 40; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

for (let i = 1; i <= T; i++) {
  const N = +input[i];

  if (N === 0) console.log("1 0");
  else console.log(`${dp[N - 1]} ${dp[N]}`);
}