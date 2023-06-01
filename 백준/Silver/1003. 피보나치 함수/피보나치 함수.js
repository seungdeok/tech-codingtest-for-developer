// 0.25초 / 128MB
// 23.06.01
// 14:09 ~ 14:52

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];

const dp = Array.from({ length: 41 }, () => 0);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= 40; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

for (let i = 1; i <= n; i++) {
  const testCase = +input[i];

  if (testCase === 0) console.log("1 0");
  else console.log(`${dp[testCase - 1]} ${dp[testCase]}`);
}
