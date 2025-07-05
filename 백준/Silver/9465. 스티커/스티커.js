/**
 * https://www.acmicpc.net/problem/9465
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
for (let i = 0; i < N; i++) {
  const line1 = input[i * 3 + 2].split(" ").map(Number);
  const line2 = input[i * 3 + 3].split(" ").map(Number);

  const length = +input[i * 3 + 1];
  const dp = Array(length);
  dp[0] = [0, line1[0], line2[0]];

  for (let j = 1; j < length; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + line1[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + line2[j],
    ];
  }

  console.log(Math.max(...dp[length - 1]));
}