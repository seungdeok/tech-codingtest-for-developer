/**
 * https://www.acmicpc.net/problem/11659
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);
const prefixSum = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + arr[i];
}

for (let i = 2; i < M + 2; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  console.log(prefixSum[end] - prefixSum[start - 1]);
}