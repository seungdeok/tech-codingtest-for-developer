// 1초 / 512MB
// 23.06.13
// 14:28 ~ 14:54

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const MAX = 10000;
const dp = Array(MAX + 1).fill(0);

for (let i = 0; i <= MAX; i++) {
  dp[i] = 1;
}

for (let i = 2; i <= MAX; i++) {
  dp[i] += dp[i - 2];
}

for (let i = 3; i <= MAX; i++) {
  dp[i] += dp[i - 3];
}

const n = +input[0];
for (let i = 1; i <= n; i++) {
  const tc = +input[i];
  console.log(dp[tc]);
}
