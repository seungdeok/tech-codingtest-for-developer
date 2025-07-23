/**
 * https://www.acmicpc.net/problem/2003
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

let sum = 0;
let answer = 0;

for (let start = 0, end = 0; start < N; start++) {
  while (end < N && sum < M) {
    sum += arr[end];
    end++;
  }

  if (sum === M) answer++;
  sum -= arr[start];
}

console.log(answer);