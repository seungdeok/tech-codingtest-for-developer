/**
 * https://www.acmicpc.net/problem/11729
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test-input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const answer = [];

const N = +input[0];

function hanio(level, start, end, sub) {
  if (level === 1) {
    answer.push([start, end]);
    return;
  }

  hanio(level - 1, start, sub, end);
  answer.push([start, end]);
  hanio(level - 1, sub, end, start);
}

hanio(N, 1, 3, 2);

console.log(answer.length);
console.log(answer.map((item) => item.join(" ")).join("\n"));