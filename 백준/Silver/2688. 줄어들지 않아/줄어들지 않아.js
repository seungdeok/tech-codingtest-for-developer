// 1초  / 128MB
// 23.06.08
// 10:22 ~ 10:53

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dp = Array.from({ length: 65 }, () => Array(10).fill(0));
for (let i = 0; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i < 65; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      dp[i][j] += dp[i - 1][k];
    }
  }
}

const n = +input[0];
const answer = [];

for (let tc = 1; tc <= n; tc++) {
  const idx = +input[tc];
  let sum = 0;
  for (i = 0; i <= 9; i++) {
    sum += dp[idx][i];
  }
  answer.push(sum);
}

console.log(answer.join("\n"));
