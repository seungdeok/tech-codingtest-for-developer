// 1초 / 256MB
// 23.06.05
// 13:40 ~ 13:59

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

const MAX = 1001;
const VALUE = 10007;

let dp = Array(MAX).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < MAX; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % VALUE;
}

console.log(dp[n]);
