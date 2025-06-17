/**
 * https://www.acmicpc.net/problem/1149
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

const dp = Array.from({ length: N }, () => Array(3).fill(0));

const arr = [];

for (const item of input.slice(1)) {
  const [R, G, B] = item.split(" ").map(Number);
  arr.push([R, G, B]);
}

dp[0] = [arr[0][0], arr[0][1], arr[0][2]];

for (let i = 1; i < dp.length; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0]; // R
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1]; // G
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2]; // B
}

console.log(Math.min(...dp[N - 1]));