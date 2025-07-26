/**
 * https://www.acmicpc.net/problem/10844
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: 10 }, () => 0)
);

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1];
    else if (j === 9) dp[i][j] = dp[i - 1][8];
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];

    dp[i][j] %= 1_000_000_000;
  }
}

let answer = 0;
for (let i = 0; i < 10; i++) {
  answer += dp[n][i];
  answer %= 1_000_000_000;
}

console.log(answer);