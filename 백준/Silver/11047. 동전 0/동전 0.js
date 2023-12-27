// 23.12.27 22:17 ~
// https://www.acmicpc.net/problem/11047
// Greedy

const filename =
  process.platform === "linux" ? "/dev/stdin" : "./test-input.txt";
const input = require("fs")
  .readFileSync(filename)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
let sum = K;

let answer = 0;
for (const value of input.reverse()) {
  const amount = Number(value);

  if (sum > 0) {
    const share = parseInt(sum / amount);
    answer += share;
    sum -= share * amount;
  } else {
    break;
  }
}

console.log(answer);
