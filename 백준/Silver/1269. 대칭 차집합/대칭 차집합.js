/**
 * 1269. 대칭 차집합
 * https://www.acmicpc.net/problem/1269
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const inputA = input[1].split(" ");
const a = new Map();
for (let item of inputA) {
  a.set(item, 1);
}
const inputB = input[2].split(" ");
const b = new Map();
for (let item of inputB) {
  b.set(item, 1);
}

let answer = 0;
for (let item of inputA) {
  if (!b.has(item)) answer++;
}

for (let item of inputB) {
  if (!a.has(item)) answer++;
}

console.log(answer);
