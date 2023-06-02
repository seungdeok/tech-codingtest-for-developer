// 1초 / 512MB
// 23.06.02
// 20:52 ~ 10:00

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, q] = input[0].split(" ").map(Number);
const prefixSum = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);

  for (let j = 1; j <= m; j++) {
    prefixSum[i][j] =
      arr[j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

for (let i = 1; i <= q; i++) {
  const [r1, c1, r2, c2] = input[n + i].split(" ").map(Number);
  const sum =
    prefixSum[r2][c2] -
    prefixSum[r2][c1 - 1] -
    prefixSum[r1 - 1][c2] +
    prefixSum[r1 - 1][c1 - 1];
  const cnt = (r2 - r1 + 1) * (c2 - c1 + 1);
  console.log(Math.floor(sum / cnt));
}