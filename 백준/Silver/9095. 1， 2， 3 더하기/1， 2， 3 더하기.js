// 1초 / 512MB
// 23.06.06
// 08:22 ~ 08:36

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCases = +input[0];

let dp = Array(11).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;

for (let i = 5; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = [];

for (let i = 1; i <= testCases; i++) {
  const n = +input[i];

  answer.push(dp[n]);
}

console.log(answer.join("\n"));