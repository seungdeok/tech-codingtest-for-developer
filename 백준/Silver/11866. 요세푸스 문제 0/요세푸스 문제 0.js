/**
 * https://www.acmicpc.net/problem/11866
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];

while (arr.length) {
  for (let i = 0; i < K - 1; i++) {
    arr.push(arr.shift());
  }
  answer.push(arr.shift());
}

console.log(`<${answer.join(", ")}>`);