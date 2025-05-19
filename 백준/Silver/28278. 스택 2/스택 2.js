/**
 * https://www.acmicpc.net/problem/28278
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const stack = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  const [command, X] = input[i].split(" ").map(Number);

  if (command === 1) {
    stack.push(X);
  }

  if (command === 2) {
    answer.push(stack.length ? stack.pop() : -1);
  }

  if (command === 3) {
    answer.push(stack.length);
  }

  if (command === 4) {
    answer.push(stack.length ? 0 : 1);
  }

  if (command === 5) {
    answer.push(stack.length ? stack[stack.length - 1] : -1);
  }
}
console.log(answer.join("\n"));