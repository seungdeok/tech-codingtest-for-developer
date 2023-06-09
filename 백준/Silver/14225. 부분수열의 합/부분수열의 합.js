// 2초 / 512MB
// 23.06.09
// 10:04 ~

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

const MAX_S = 100000;
const MAX_N = 20;
let visited = Array(MAX_S * MAX_N + 1).fill(false);
visited[0] = true;

for (let i = 1; i <= n; i++) {
  const cases = [...new Set(combinations(arr, i))];
  const sum = cases.map((item) => item.reduce((acc, cur) => acc + cur));

  for (let num of sum) {
    visited[num] = true;
  }
}

console.log(visited.findIndex((v) => !v));