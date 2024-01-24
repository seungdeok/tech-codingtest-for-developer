// 24.1.24
// https://www.acmicpc.net/problem/1654
// 이진탐색

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test-input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const list = input.map(Number);

let min = 1;
let max = Math.max(...list);

while (min <= max) {
  const mid = Math.floor((min + max) / 2);
  const cnt = list
    .map((line) => parseInt(line / mid))
    .reduce((cur, acc) => cur + acc, 0);

  if (cnt >= N) min = mid + 1;
  else max = mid - 1;
}

console.log(max);