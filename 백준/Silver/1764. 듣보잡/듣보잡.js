/**
 * 1764. 듣보잡
 * https://www.acmicpc.net/problem/1764
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const set = new Set();
for (let i = 1; i < 1 + N; i++) {
  set.add(input[i]);
}

const answer = [];

for (let i = 1 + N; i < 1 + N + M; i++) {
  if (set.has(input[i])) {
    answer.push(input[i]);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));