/**
 * https://www.acmicpc.net/problem/1904
 *
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 1, 00
const dp = Array(1000001).fill(0);
dp[1] = 1; // 1
dp[2] = 2; // 11, 00
dp[3] = 3; // 100, 001, 111
dp[4] = 5; // 0000 1100, 1001, 0011, 1111
dp[5] = 8; // 00001, 00100, 10000, 00111, 10011, 11001, 11100, 11111

const N = +input[0];

for (let i = 6; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);