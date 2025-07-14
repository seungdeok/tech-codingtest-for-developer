/**
 * https://www.acmicpc.net/problem/2839
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

let N = +input[0];
let answer = -1;

for (let i = parseInt(N / 5); i >= 0; i--) {
  let sum = N - i * 5;

  if (sum % 3 === 0) {
    answer = i + sum / 3;
    break;
  }
}
console.log(answer);