// 24.1.4
// https://www.acmicpc.net/problem/10773

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const answer = [Number(input[1])];

for (let i = 2; i <= N; i++) {
  if (Number(input[i]) === 0) {
    answer.pop();
  } else {
    answer.push(Number(input[i]));
  }
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
