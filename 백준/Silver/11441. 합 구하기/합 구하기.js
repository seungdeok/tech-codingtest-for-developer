/**
 * https://www.acmicpc.net/problem/11441
 */

const [N, arr, M, ...input] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let sum = 0;
const prefixSum = [0];
const numArr = arr.split(" ").map(Number);
for (const num of numArr) {
  sum += num;
  prefixSum.push(sum);
}

const answer = [];
for (const item of input) {
  const [left, right] = item.split(" ").map(Number);
  answer.push(prefixSum[right] - prefixSum[left - 1]);
}

console.log(answer.join("\n"));