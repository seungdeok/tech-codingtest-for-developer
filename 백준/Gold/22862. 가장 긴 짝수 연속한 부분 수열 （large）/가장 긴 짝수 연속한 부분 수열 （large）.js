/**
 * https://www.acmicpc.net/problem/22862
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let removedCnt = 0;
let answer = 0;

while (end < N) {
  if (arr[end] % 2 === 1) {
    removedCnt++;
  }

  while (removedCnt > K) {
    if (arr[start] % 2 === 1) {
      removedCnt--;
    }
    start++;
  }

  answer = Math.max(answer, end - start + 1 - removedCnt);
  end++;
}

console.log(answer);