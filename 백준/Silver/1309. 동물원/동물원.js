// 2초 / 256MB
// 23.06.13
// 13:42 ~ 14:25

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = +input;

const MAX = 100000;
let dp = Array(MAX + 1).fill(0);
dp[0] = 0;
dp[1] = 3;
dp[2] = 7;
dp[3] = 17;

for (let i = 4; i <= MAX; i++) {
  dp[i] = (2 * dp[i - 1] + dp[i - 2]) % 9901;
}

console.log(dp[n]);
